import { useEffect, useState } from "react";
import NavBar from "../atomicComponents/navBar";
import MaterialUISwitch from "../atomicComponents/themeSwitch";

const LandingPage = () => {
  const [theme, setTheme] = useState("light");
  // useEffect(() => {
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setTheme('dark');
  //   }
  //   else {
  //     setTheme('light');
  //   }
  // }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <NavBar />
      <div className="fixed top-2 right-10 duration-100 dark:bg-slate-700  rounded">
        <MaterialUISwitch sx={{ m: 1 }} onClick={handleThemeSwitch}/>
      </div>
    </>
  );
};

export default LandingPage;
