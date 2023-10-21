import React from "react"
import Header from "./Layer/Header"
import Footer from "./Layer/Footer"
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;