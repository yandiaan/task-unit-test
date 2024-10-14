import Posts from "@/app/_modules/posts";
import { render, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LayoutMock from "../mocks/Layout.mock";
import setupMockedPost from "./posts.rest";
import mockRouter from "next-router-mock";
import { setup } from "../helpers/event-setup";

beforeAll(() => setupMockedPost.listen());
afterEach(() => setupMockedPost.resetHandlers());
afterAll(() => setupMockedPost.close());

describe("Posts", () => {
  it("should render", async () => {
    const { getByText } = setup(<LayoutMock>{await Posts()}</LayoutMock>);

    expect(getByText(/read our latest blogs/i)).toBeVisible();

    expect(getByText(/latest blogs./i)).toBeVisible();
  });

  it("should render with correct data", async () => {
    const { getByText } = setup(<LayoutMock>{await Posts()}</LayoutMock>);

    expect(getByText(/Test title/i)).toBeVisible();
    expect(getByText(/Test body content/i)).toBeVisible();

    expect(getByText(/Test name/i)).toBeVisible();
  });

  it("should can change language", async () => {
    const { user, getByTestId, getByText } = setup(
      <LayoutMock>{await Posts()}</LayoutMock>
    );

    const languageSelector = getByTestId("language-selector");

    expect(languageSelector).toBeInTheDocument();

    await user.selectOptions(languageSelector, "id");

    await waitFor(async () => {
      expect(languageSelector).toHaveValue("id");
    });

    expect(getByText(/baca blog terbaru kami/i)).toBeVisible();
    expect(getByText(/post terbaru/i)).toBeVisible();
  })
});
