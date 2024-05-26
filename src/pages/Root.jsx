import Navbar from 'layout/Navbar/Navbar';
import Sidebar from 'layout/Sidebar/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (<>
    <Navbar />
    <main>
      <Sidebar />
      <Outlet></Outlet>
    </main>
  </>

  );
}

export default RootLayout;