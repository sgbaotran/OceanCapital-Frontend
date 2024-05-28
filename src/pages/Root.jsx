import Navbar from 'components/ui/Navbar';
import Sidebar from 'components/ui/Sidebar';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './styles/Root.css'


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

  return (<>
    <Navbar onSetDarkMode={handleSetDarkMode} />

    <main>

      <Sidebar />

      <Outlet></Outlet>

    </main>
  </>

  );
}

export default RootLayout;
