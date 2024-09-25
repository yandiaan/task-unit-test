import "@testing-library/jest-dom/vitest";

beforeAll(() => {
  vi.mock("next/router", () => require("next-router-mock"));
});
