"use client";
import React from "react";
import cx from "classnames";
import { useTranslations } from "@/app/_hooks/langHooks";

export default function BlogListTitle() {
  const { blogListTitle } = useTranslations();
  return (
    <h1
      className={cx(
        "mx-24 mt-12 w-fit text-3xl font-semibold relative z-10",
        "after:content-[' '] after:w-1/2 after:h-[2px] after:bg-black after:absolute after:-bottom-2 after:left-1/4 after:dark:bg-slate-200"
      )}
    >
      {blogListTitle}
    </h1>
  );
}
