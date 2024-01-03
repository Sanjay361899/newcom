import React from 'react'
import { Link } from 'react-router-dom'
import {FaCartPlus, FaSearch} from 'react-icons/fa'

const Header = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/search'><FaSearch/></Link>
        <Link to='/search'><FaCartPlus/></Link>
    </nav>
  )
}

export default Header