"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useLang } from "@/app/_contexts/LangContext";
import { navData } from "@/app/_lib/navData";
import { useTheme } from "@/app/_contexts/ThemeContext";
import LanguageSelector from "./languageSelector";
import Button from "./button";
import NavLink from "./navLink";

export default function Navbar() {
  const { lang, changeLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const data = navData(lang);

  const languageOptions = [
    { value: "id", label: "ID", icon: true },
    { value: "en", label: "EN", icon: true },
  ];

  const handleLanguageChange = (selectedValue) => {
    changeLang(selectedValue);
  };

  const activePath = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cx([
        "flex justify-between items-center",
        "fixed z-30 w-full",
        "py-8 px-24",
        "transition-all duration-500 ease-in-out",
        isScrolled ? "bg-white shadow-lg pt-4 pb-6 dark:bg-slate-700" : "",
      ])}
    >
      <Link href="/">
        <h1
          className={cx([
            "text-4xl font-medium",
            "w-fit",
            "group relative cursor-pointer",
            "before:content-['/'] before:font-bold before:text-orange-600 dark:before:text-cyan-950",
            isScrolled ? "text-gray-400 dark:text-gray-300" : "text-white",
          ])}
        >
          Blog.
        </h1>
      </Link>
      <div id="navlinks">
        <ul className="flex items-center gap-8">
          {data.map((item, key) => {
            return (
              <NavLink
                key={key}
                path={item.path}
                name={item.name}
                activePath={activePath}
                isScrolled={isScrolled}
              />
            );
          })}
          <Button
            data-testid="theme-switcher"
            color="darkMode"
            onClick={() => {
              toggleTheme();
            }}
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </Button>
          <LanguageSelector
            options={languageOptions}
            onSelect={handleLanguageChange}
          />
        </ul>
      </div>
    </nav>
  );
}
