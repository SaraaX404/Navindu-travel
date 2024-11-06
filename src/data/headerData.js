import logo from "@/images/resources/logo-1.png";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [
    ],
  },
  {
    id: 2,
    name: "Destinations",
    href: "/destinations",
    subNavItems: [
      { id: 1, name: "Destinations", href: "/destinations" },
      { id: 2, name: "Destinations Detail", href: "/destinations-details" },
    ],
  },
  {
    id: 3,
    name: "Tours",
    href: "/tours",
    subNavItems: [
      { id: 1, name: "Tours", href: "/tours" },
      { id: 2, name: "Tours List", href: "/tours-list" },
      { id: 3, name: "Tours Details", href: "/tour-details" },
    ],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "" },
  { icon: "fa-pinterest-p", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+ 92 666 999 0000",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "needhelp@company.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;
