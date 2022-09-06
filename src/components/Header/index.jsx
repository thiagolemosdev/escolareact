import React from 'react'
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { Nav } from './styled'

export default function Header() {
  return (
    // <h1>Oi</h1>
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/add">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  )
}
