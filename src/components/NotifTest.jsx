import React, { useEffect, useState } from "react";

function NotifTest() {
  const [areNotifAllowed, setAllowNotif] = useState(false);

  useEffect(() => {
    if (!areNotifAllowed)
      Notification.requestPermission().then(
        result => result === "granted" && setAllowNotif(true)
      );
  }, [areNotifAllowed]);

  const handleNotification = () => {
    new Notification("Hello !");
  };

  return (
    <div>
      {areNotifAllowed ? (
        <button onClick={handleNotification}>Send me a notification</button>
      ) : (
        <span>Notifications are note allowed</span>
      )}
    </div>
  );
}

export default NotifTest;
