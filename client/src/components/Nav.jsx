import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul>
        <NavLink to="/">
          <li>CODE STORM</li>
        </NavLink>
        <NavLink to="/new">
          <li>Submit an Idea</li>
        </NavLink>
        <NavLink to="/">
          <li>Random Idea</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav
