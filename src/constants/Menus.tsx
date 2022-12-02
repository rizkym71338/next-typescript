import {
  IconMenuBooking,
  IconMenuDashboard,
  IconMenuDriver,
  IconMenuNotification,
  IconMenuSetting,
} from "../assets";

const Menus = [
  {
    icon: <IconMenuDashboard />,
    name: "Dashboard",
    href: "/",
  },
  {
    icon: <IconMenuDriver />,
    name: "Drivers",
    href: "/drivers",
  },
  {
    icon: <IconMenuBooking />,
    name: "Bookings",
    href: "/bookings",
  },
  {
    icon: <IconMenuNotification />,
    name: "Notifications",
    href: "/notifications",
  },
  {
    icon: <IconMenuSetting />,
    name: "Settings",
    href: "/settings",
  },
];

export default Menus;
