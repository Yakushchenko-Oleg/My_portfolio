import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <NavLink 
            to="/"
            >Home
            </NavLink>
            <NavLink
            to='about'
            >About me
            </NavLink>
            <NavLink
            to='projects'
            >My projects
            </NavLink>

        </nav>
    </header>
  )
}

export default Header
