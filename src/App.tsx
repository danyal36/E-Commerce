import React from 'react';
// import logo from './assets/icons/logo.svg';
import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import { getUser } from './utils/auth';


function App() {
  const user = getUser();
  const routing = useRoutes(routes(user));

  return (
    <>
      {routing}
    </>
  );
}

export default App;
