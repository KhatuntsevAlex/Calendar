import React from 'react'
import { Switch, Route } from 'react-router-dom'
import EventCalendar from './components/EventCalendar/EventCalendar'
import SearchBar from './components/SearchBar/SearchBar'
import Navbar from './components/Navbar/Navbar'
import Logo from './components/Logo/Logo'
import './App.scss'

export default function App() {
  return <div className="app-wrapper">
    <Logo />
    <SearchBar />
    <Navbar />
    <div className="app-wrapper-content">
      <Switch>
        <Route path="/calendar" render={() => <EventCalendar />} />
        <Route render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </div>
  </div>
}
