import { describe, it, expect, beforeEach, vi } from "vitest";
import { render } from "@testing-library/react";
import { act } from "@testing-library/react";
import useThemeStore, { ThemeProvider } from "../../app/_store/theme-store";

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("useThemeStore", () => {
  beforeEach(() => {
    localStorage.clear();
    useThemeStore.setState({ theme: "dark" });
  });

  it("should initialize with dark theme by default", () => {
    const { theme } = useThemeStore.getState();
    expect(theme).toBe("dark");
  });

  it("should toggle theme from dark to light", () => {
    const { toggleTheme } = useThemeStore.getState();

    act(() => {
      toggleTheme();
    });

    const { theme } = useThemeStore.getState();
    expect(theme).toBe("light");
    expect(localStorage.getItem("theme-storage")).toContain('"light"');
  });

  it("should toggle theme from light to dark", () => {
    const { toggleTheme } = useThemeStore.getState();

    act(() => {
      toggleTheme();
      toggleTheme();
    });

    const { theme } = useThemeStore.getState();
    expect(theme).toBe("dark");
    expect(localStorage.getItem("theme-storage")).toContain('"dark"');
  });

  it("should persist theme in localStorage after toggle", () => {
    const { toggleTheme } = useThemeStore.getState();

    act(() => {
      toggleTheme();
    });

    expect(localStorage.getItem("theme-storage")).toContain('"light"');
  });

  it("should persist theme from localStorage during rehydration", () => {
    localStorage.setItem(
      "theme-storage",
      JSON.stringify({ state: { theme: "light" } })
    );

    useThemeStore.persist.rehydrate();

    const { theme } = useThemeStore.getState();
    expect(theme).toBe("light");
  });

  it("should handle corrupted data in localStorage gracefully during rehydration", () => {
    localStorage.setItem("theme-storage", '{"state":{}}');

    useThemeStore.persist.rehydrate();

    const { theme } = useThemeStore.getState();
    expect(theme).toBe("dark");
  });

  it('should add "dark" class to body when dark theme is selected', async () => {
    document.body.classList.add = vi.fn();

    render(
      <ThemeProvider>
        <div />
      </ThemeProvider>
    );

    await act(async () => {
      useThemeStore.setState({ theme: "dark" });
    });

    expect(document.body.classList.add).toHaveBeenCalledWith("dark");
  });

  it('should remove "dark" class from body when light theme is selected', async () => {
    document.body.classList.remove = vi.fn();

    render(
      <ThemeProvider>
        <div />
      </ThemeProvider>
    );

    await act(async () => {
      useThemeStore.setState({ theme: "light" });
    });

    expect(document.body.classList.remove).toHaveBeenCalledWith("dark");
  });
});
