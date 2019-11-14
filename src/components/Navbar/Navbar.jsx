/* eslint-disable react/state-in-constructor */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBarcode, FaBeer } from 'react-icons/fa'
import { AiTwotoneHome } from 'react-icons/ai'
import { MdEqualizer, MdMailOutline, MdSettings, MdPersonOutline } from 'react-icons/md'
import { IoMdChatboxes, IoIosHelpBuoy } from 'react-icons/io'
import { GoCalendar } from 'react-icons/go'

export default function Navbar() {
  const [navItems] = useState([
    {
      icon: <AiTwotoneHome />,
      title: 'Home',
      link: '/home',
    },
    {
      icon: <MdEqualizer />,
      title: 'Dashboard',
      link: '/dashboard',
    },
    {
      icon: <MdMailOutline />,
      title: 'Inbox',
      link: '/inbox',
    },
    {
      icon: <FaBarcode />,
      title: 'Products',
      link: '/products',
    },
    {
      icon: <FaBeer />,
      title: 'Invoices',
      link: '/invoices',
    },
    {
      icon: <MdPersonOutline />,
      title: 'Costumers',
      link: '/costumers',
    },
    {
      icon: <IoMdChatboxes />,
      title: 'Chat Room',
      link: '/chat_room',
    },
    {
      icon: <GoCalendar />,
      title: 'Calendar',
      link: '/calendar',
    },
    {
      icon: <IoIosHelpBuoy />,
      title: 'Help Center',
      link: '/help_center',
    },
    {
      icon: <MdSettings />,
      title: 'Settings',
      link: '/settings',
    },
  ],
  )

  return (
    <nav className="navBar">
      {navItems.map(
        ({ icon, title, link }) => <NavLink key={title} to={link}>
          <div className="navBar-item">
            <span>{icon}</span>
            <span>{title}</span>
          </div>
        </NavLink>)}
    </nav>
  )
}


