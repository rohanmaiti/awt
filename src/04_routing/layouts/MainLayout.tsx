import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const nav_style = {
  display: "flex",
  textDecoration: "none",
  gap: "20px",
};

export const MainLayout = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <nav style={nav_style}>
        <NavLink to="/dashboard/home"> Home </NavLink>
        <NavLink to="/dashboard/about"> About </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
