import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

const Layout = ({ error }) => {
  return (
    <>
      <Header />
      <main className="container">{error ? error : <Outlet />}</main>
      <Footer />
    </>
  );
};

export default Layout;
