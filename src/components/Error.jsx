import React from 'react';
import './Error.css'

function Error() {
  // ==================== HANLDING DARKMODE ==================== //
  const savedThemeMode = localStorage.getItem("themeMode")
  const darkMode = savedThemeMode ? savedThemeMode === 'dark' : false;

  document.body.classList.toggle('dark-theme', darkMode);

  return (
    <div className="error-page">
      <h1 className="bg-card-dark-purple">404</h1>
      <h2 className="primary">Page Not Found</h2>
      <p className="text-muted">Sorry, the page you're looking for doesn't exist.</p>
      <a href="/" className="btn bg-primary">Go to Home</a>
    </div>
  );
}

export default Error;