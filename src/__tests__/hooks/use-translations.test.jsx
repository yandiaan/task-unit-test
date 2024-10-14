import { LangProvider, useLang } from "@/app/_contexts/LangContext";
import { useTranslations } from "@/app/_hooks/langHooks";
import { translationsEn } from "@/app/_lang/en";
import { translationsId } from "@/app/_lang/id";
import { renderHook, act, waitFor } from "@testing-library/react";

describe("useTranslations with LangProvider", () => {
  it('should return English translations when lang is "en"', () => {
    const { result } = renderHook(() => useTranslations(), {
      wrapper: LangProvider,
    });

    expect(result.current).toEqual(translationsEn);
  });

  it('should return Indonesian translations when lang is set to "id"', () => {
    const { result } = renderHook(() => useTranslations(), {
      wrapper: LangProvider,
    });

    const { changeLang } = renderHook(() => useLang(), {
      wrapper: LangProvider,
    }).result.current;

    act(() => {
      changeLang("id");
    });

    waitFor(() => {
      expect(result.current).toEqual(translationsId);
    });
  });

  it("should fallback to Indonesian translations if lang is unknown", () => {
    const { result } = renderHook(() => useTranslations(), {
      wrapper: LangProvider,
    });

    const { changeLang } = renderHook(() => useLang(), {
      wrapper: LangProvider,
    }).result.current;

    act(() => {
      changeLang("fr");
    });

    waitFor(() => {
      expect(result.current).toEqual(translationsId);
    });
  });
});
