import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <nav>
        <Link to="/dashboard/home/home1"> Home1 </Link>
        <Link to="/dashboard/home/home2"> Home2 </Link>
        <Link to="/dashboard/home/home1"> Home3 </Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};
