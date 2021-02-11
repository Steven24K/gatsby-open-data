import { Link } from "gatsby";
import React from "react";
import "./NavBar.css";

const navItems = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' }, 
  { to: '/wiki', text: 'Check the Wiki'}
]

function NavBar() {
  let active_path = document.location.pathname
  active_path = active_path.endsWith('/') ? active_path.slice(0, -1) : active_path
  return (
    <div className="sidebar">
      {navItems.map(item => <Link className={active_path == item.to ? 'active' : ''} key={item.to} to={item.to}>{item.text}</Link>)}
    </div>

  );
}

export default NavBar;
