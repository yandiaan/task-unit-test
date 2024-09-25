import Users from "@/app/_modules/users";
import { describe, expect, it } from "vitest";
import { setup } from "../helpers/event-setup";
import LayoutMock from "../mocks/Layout.mock";
import setupMockedUser from "./users.rest";
import { waitFor } from "@testing-library/react";

beforeAll(() => setupMockedUser.listen());
afterEach(() => setupMockedUser.resetHandlers());
afterAll(() => setupMockedUser.close());
describe("Users", () => {
  it("should render with correct data", async () => {
    const { getByText } = setup(<LayoutMock>{await Users()}</LayoutMock>);

    expect(getByText(/List Users/i)).toBeVisible();

    expect(getByText(/Test name 1/i)).toBeVisible();
    expect(getByText(/Test email 1/i)).toBeVisible();

    expect(getByText(/Test name 2/i)).toBeVisible();
    expect(getByText(/Test email 2/i)).toBeVisible();
  });

  it("should render user form", async () => {
    const { getByText, getByPlaceholderText } = setup(
      <LayoutMock>{await Users()}</LayoutMock>
    );

    expect(getByText(/Create User/i)).toBeVisible();

    expect(getByPlaceholderText(/Enter your name/i)).toBeVisible();
    expect(getByPlaceholderText(/Enter your email/i)).toBeVisible();

    expect(getByText('Male')).toBeVisible();
    expect(getByText('Female')).toBeVisible();
  })

  it("should can submit form", async () => {
    const { user, getByText, getByPlaceholderText,getByTestId } = setup(
      <LayoutMock>{await Users()}</LayoutMock>
    );

    const name = getByPlaceholderText(/Enter your name/i);
    const email = getByPlaceholderText(/Enter your email/i);

    await user.type(name, "Test name");
    await user.type(email, "testemail@example.com");

    expect(name).toHaveValue("Test name");
    expect(email).toHaveValue("testemail@example.com");

    
    const male = getByTestId("radio-male");
    const female = getByTestId("radio-female");

    expect(male).toBeVisible();
    expect(female).toBeVisible();

    await user.click(male);
    expect(male).toBeChecked();
    
    await user.click(female);
    expect(female).toBeChecked();

    await user.click(getByText(/Submit/i));

    await waitFor(() => {
      expect(getByText(/sukses menambah user/i)).toBeVisible();
    })
  })

  it("should show error when form is invalid", async () => {
    const { user, getByText, getByPlaceholderText } = setup(
      <LayoutMock>{await Users()}</LayoutMock>
    );

    const name = getByPlaceholderText(/Enter your name/i);
    const email = getByPlaceholderText(/Enter your email/i);

    await user.type(name, "testgagal");
    await user.type(email, "testgagal@example.com");

    expect(name).toHaveValue("testgagal");
    expect(email).toHaveValue("testgagal@example.com");

    await user.click(getByText(/Submit/i));

    await waitFor(() => {
      expect(getByText(/gagal menambahkan data/i)).toBeVisible();
    })
  })
});
