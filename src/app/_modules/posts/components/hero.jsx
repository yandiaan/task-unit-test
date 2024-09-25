'use client';
import { useTranslations } from "@/app/_hooks/langHooks";
import React from "react";

export default function Hero() {
  const { hero } = useTranslations();
  return (
    <div className="bg-orange-600 dark:bg-cyan-950 h-[65vh] pt-28 px-24 text-white">
      <div className="container flex flex-col text-center w-2/3 mx-auto gap-4">
        <h1 className="text-5xl">{hero.title}</h1>
        <p>
          {hero.body}
        </p>
      </div>
    </div>
  );
}
