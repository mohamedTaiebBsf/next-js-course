import React from "react";
import MainHeader from "../header";

function Layout({ children }) {
  return (
    <React.Fragment>
      <MainHeader />
      <main>{children}</main>
    </React.Fragment>
  );
}
export default Layout;
