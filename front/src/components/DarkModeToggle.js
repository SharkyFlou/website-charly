import React, { useState, useEffect  } from "react";
import "./DarkModeToggle.css"

export const DarkModeToggle = ({ t }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleDark = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  /* If user prefers dark mode, set dark mode */

  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      toggleDark();
    }
    // eslint-disable-next-line
  },[])
  

  return (
    <div className="dark-mode-toggle_container">
      <div
        className={`dark-mode-toggle ${isDark ? "dark" : "light"}`}
        alt={t("navbar_darkmode")}
        checked={isDark}
        onClick={toggleDark}
        aria-label="Dark mode toggle">
      </div>
    </div>
  );
};