import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { LangProvider, useLang } from "@/app/_contexts/LangContext";

const TestComponent = () => {
  const { lang, changeLang } = useLang();
  return (
    <div>
      <span data-testid="current-lang">{lang}</span>
      <button onClick={() => changeLang("id")} data-testid="change-lang-btn">
        Change to Indonesia
      </button>
    </div>
  );
};

test('should provide the default language as "en"', () => {
  render(
    <LangProvider>
      <TestComponent />
    </LangProvider>
  );

  const currentLang = screen.getByTestId("current-lang");
  expect(currentLang.textContent).toBe("en");
});

test("should update language when changeLang is called", async () => {
  const user = userEvent.setup();

  render(
    <LangProvider>
      <TestComponent />
    </LangProvider>
  );

  const currentLang = screen.getByTestId("current-lang");
  const changeLangBtn = screen.getByTestId("change-lang-btn");

  expect(currentLang.textContent).toBe("en");

  await user.click(changeLangBtn);

  expect(currentLang.textContent).toBe("id");
});

test("should persist the language change across renders", async () => {
  const user = userEvent.setup();

  const { rerender } = render(
    <LangProvider>
      <TestComponent />
    </LangProvider>
  );

  const currentLang = screen.getByTestId("current-lang");
  const changeLangBtn = screen.getByTestId("change-lang-btn");

  await user.click(changeLangBtn);
  expect(currentLang.textContent).toBe("id");

  rerender(
    <LangProvider>
      <TestComponent />
    </LangProvider>
  );

  expect(currentLang.textContent).toBe("id");
});
