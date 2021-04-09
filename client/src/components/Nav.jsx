import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/App.css'

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">
          <li className="logo">
            CODE <span className="bolt__logo"></span> STORM
          </li>
        </NavLink>
        <NavLink to="/new">
          <li>Submit an Idea</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav
