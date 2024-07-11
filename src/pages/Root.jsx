
import Sidebar from 'components/common/Sidebar';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Root.css'
import { useLocation } from 'react-router-dom';

function RootLayout() {

  // ==================== HANLDING DARKMODE ==================== //
  const [darkMode, setDarkMode] = useState(() => {
    const savedThemeMode = localStorage.getItem("themeMode");
    return savedThemeMode ? savedThemeMode === 'dark' : false;
  });

  useEffect(() => {
    const themeMode = darkMode ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme', darkMode);
    localStorage.setItem("themeMode", themeMode);
  }, [darkMode]);


  function handleSetDarkMode() {
    setDarkMode(darkMode => !darkMode)
  }


  const location = useLocation();

  const currentPath = location.pathname.slice(1) ? location.pathname.slice(1) : 'dashboard';



  return (<>


    {/* <Navbar onSetDarkMode={handleSetDarkMode} /> */}

    <main id={currentPath}>

      <Sidebar />

      <Outlet />

    </main>
  </>

  );
}

export default RootLayout;
