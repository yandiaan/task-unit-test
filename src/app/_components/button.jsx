import cx from "classnames";
import React from "react";

export default function Button({ children, className, color, onClick, type = "button", ...rest }) {
  const colorScheme = (color) => {
    switch (color) {
      case "red":
        return "bg-red-600 text-white";
        break;
      case "green":
        return "bg-green-500 text-white";
        break;
      case "light":
        return "bg-cyan-950 text-white";
        break;
      case "dark":
        return "bg-orange-600 text-white";
        break;
      case "darkMode":
        return cx(
          "dark:bg-gray-600 dark:text-orange-400 dark:hover:bg-orange-500 dark:hover:text-white",
          "bg-gray-300 text-sky-800 hover:bg-sky-800 hover:text-white"
        );
        break;
      default:
        return "bg-white text-black dark:bg-gray-400 dark:text-white";
        break;
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cx([
        "w-max p-2 rounded-lg",
        "text-2xl",
        "group hover:shadow-lg",
        "transition-all duration-500 ease-in-out",
        colorScheme(color),
        className,
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
