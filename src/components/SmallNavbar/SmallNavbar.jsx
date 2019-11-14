import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosHelpBuoy, IoIosChatbubbles } from 'react-icons/io'
import { FaBell } from 'react-icons/fa'

export default function SmallNavbar() {
  return (
    <div className="nav-small">
      <div><Link to="help_center"><IoIosHelpBuoy /></Link></div>
      <div><Link to="chat_room"><IoIosChatbubbles /></Link></div>
      <div>
        <Link to="notifications"><FaBell /></Link>
        <div className="notification" />
      </div>
    </div>
  )
}
