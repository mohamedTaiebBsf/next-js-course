import React from "react";
import MainNavigation from "./main-navigation";

function Layout({ children }) {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>{children}</main>
    </React.Fragment>
  );
}

export default Layout;
