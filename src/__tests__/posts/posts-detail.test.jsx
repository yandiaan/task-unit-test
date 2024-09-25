import { describe, expect, it } from "vitest";
import { setup } from "../helpers/event-setup";
import BlogDetails from "@/app/_modules/posts/detail";
import { setupMocketDetailPost } from "./posts.rest";
import LayoutMock from "../mocks/Layout.mock";

beforeAll(() => setupMocketDetailPost.listen());
afterEach(() => setupMocketDetailPost.resetHandlers());
afterAll(() => setupMocketDetailPost.close());
describe("Post Detail", () => {
    it("should render", async () => {
        const { getByText } = setup(<LayoutMock>{await BlogDetails({ id: 1 })}</LayoutMock>);

        expect(getByText(/Test title/i)).toBeVisible();
        expect(getByText(/Test body content/i)).toBeVisible();
    })

    it('should show message with text "No Comments Yet" when there is no comments', async () => {
        const { getByText } = setup(<LayoutMock>{await BlogDetails({ id: 1 })}</LayoutMock>);

        expect(getByText(/No Comments Yet/i)).toBeVisible();
        expect(getByText(/Test title/i)).toBeVisible();

        expect(getByText(/no comments yet/i)).toBeVisible();
    })
})