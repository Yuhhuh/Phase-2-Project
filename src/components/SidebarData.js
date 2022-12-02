import React from "react";

//import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Gallery",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Add Image",
    path: "images/new",
    icon: <IoIcons.IoIosAdd />,
    cName: "nav-text"
  },
  {
    title: "About",
    path: "/AboutPage",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  }
];