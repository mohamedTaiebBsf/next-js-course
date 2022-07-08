import React, { useContext } from "react";
import MainHeader from "../header";
import Notification from "../ui/notification";
import NotificationContext from "../../store/notification-context";

function Layout({ children }) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <React.Fragment>
      <MainHeader />
      <main>{children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </React.Fragment>
  );
}
export default Layout;
