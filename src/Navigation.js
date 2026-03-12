import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div id="navigation" className={collapsed ? "collapsed" : ""}>
      <button id="nav-toggle" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "»" : "«"}
      </button>
      <Link to="/" title="Home">
        <span className="nav-icon">🏠</span>
        <span className="nav-label">Home</span>
      </Link>
      <Link to="/about" title="About">
        <span className="nav-icon">ℹ️</span>
        <span className="nav-label">About</span>
      </Link>
      <Link to="/contact" title="Contact">
        <span className="nav-icon">✉️</span>
        <span className="nav-label">Contact</span>
      </Link>
      <Link to="/settings" title="Settings">
        <span className="nav-icon">⚙️</span>
        <span className="nav-label">Settings</span>
      </Link>
      <Link to="/login" title="Login">
        <span className="nav-icon">👤</span>
        <span className="nav-label">Login</span>
      </Link>
      <div id="launchpad"></div>
    </div>
  );
};

export default Navigation;
