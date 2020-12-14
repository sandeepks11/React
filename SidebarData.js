import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from "react-icons/si";



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    
  },
  {
    title: 'Universities ',
    path: '/Universities',
    icon: <FaIcons.FaUniversity />,
    cName: 'nav-text',
   
  },
  {
    title: 'Admissions',
    path: '/Admissions',
    icon: <SiIcons.SiAcademia/>,
    cName: 'nav-text',
   
  },

];