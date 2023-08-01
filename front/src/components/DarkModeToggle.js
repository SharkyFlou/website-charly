import React, { useState } from "react";
import "./DarkModeToggle.css"

export const DarkModeToggle = ({t}) => {
  const [isDark, setIsDark] = useState(true); 

  const toggleDark = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
};

  return (
    <div className="dark-mode-toggle__container">
      <div
        className={`dark-mode-toggle ${isDark ? "dark" : "light"}`}
        alt={t("navbar__darkmode")}
        checked={isDark}
        onClick={toggleDark}
        aria-label="Dark mode toggle">
      </div>
    </div>
  );
};