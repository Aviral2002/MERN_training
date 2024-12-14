import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav style={{display: 'flex',
          alignItems:'center',
          justifyContent:'space-between',
          padding:'10px',
          marginLeft:'55vw',
          marginRight:'5vw',
        }}>
            <Link style={{listStyleType:'none'}} to ='/'><li>Home</li></Link>
            <Link style={{listStyleType:'none'}} to ='/About'><li>About</li></Link>
            <Link style={{listStyleType:'none'}} to ='/Contact'><li>Contact</li></Link>
        </nav>
    </div>
  )
}

export default Navbar