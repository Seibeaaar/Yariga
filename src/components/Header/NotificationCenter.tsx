/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import NotificationIcon from "@/assets/icons/Notification.svg?react";
import Popup from "../Popup";
import useWindowDimensions from "@/customization/useWindowDimensions";

const NotificationCenter = () => {
  const [notificationsOpen, setNotificationOpen] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const toggleNotificationList = () => setNotificationOpen(!notificationsOpen);

  if (!width) return null;

  return (
    <>
      <NotificationIcon
        className="cursor-pointer"
        onClick={toggleNotificationList}
      />
      <Popup
        open={notificationsOpen}
        onClose={() => setNotificationOpen(false)}
        className={`top-[70px] lg:min-w-[400px] lg:left-[-200px] w-[calc(100%-8px)] left-[4px]`}
      >
        <div className="p-[16px]">
          <div className="min-h-[150px] flex items-center justify-center">
            <h4 className="text-md font-bold text-primary-light dark:text-primary-dark">
              No notifications yet
            </h4>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default NotificationCenter;
