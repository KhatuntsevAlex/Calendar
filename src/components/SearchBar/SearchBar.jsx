import React from 'react'
import { FiSearch } from 'react-icons/fi'
import SmallNavbar from '../SmallNavbar/SmallNavbar'
import UserInfo from '../UserInfo/UserInfo'

export default function SearchBar() {
  return <div className="my-search-bar">
    <nav className="navbar navbar-light ">
      <form className="form-inline">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1"><FiSearch /></span>
          </div>
          <input type="text" className="form-control" placeholder="Search transactions, invoices or help" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </form>
    </nav>
    <div className="search-bar-info">
      <SmallNavbar />
      <UserInfo />
    </div>
  </div>
}


