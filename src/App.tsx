import React, { useEffect, useState } from 'react';
// import logo from './assets/icons/logo.svg';
import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import { getUser } from './utils/auth';


function App() {
  const user = getUser();
  const routing = useRoutes(routes(user));
  const [theme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className='dark: text-gray-100 dark:bg-slate-900 duration-100 h-screen'>
      {routing}
    </ div>
  );
}

export default App;
