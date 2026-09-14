import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    const checkLogin = () => {
      const savedUser = localStorage.getItem('inkspaceLoggedIn')

      if (savedUser) {
        setLoggedInUser(JSON.parse(savedUser))
      } else {
        setLoggedInUser(null)
      }
    }

    // Check when Navbar loads
    checkLogin()

    // Check when login/logout happens
    window.addEventListener('authChanged', checkLogin)

    return () => {
      window.removeEventListener('authChanged', checkLogin)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('inkspaceLoggedIn')

    setLoggedInUser(null)

    window.dispatchEvent(new Event('authChanged'))

    navigate('/')
  }

  const navStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? '#1c1917' : '#78716c',
    fontSize: '15px',
    fontWeight: isActive ? '600' : '500',
    padding: '9px 4px',
    borderBottom: isActive
      ? '2px solid #1c1917'
      : '2px solid transparent',
    transition: 'all 0.2s ease',
  })

  return (
    <nav
      style={{
        width: '100%',
        boxSizing: 'border-box',
        backgroundColor: '#f7f3ed',
        borderBottom: '1px solid #e7e0d6',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '17px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#1c1917',
            fontSize: '27px',
            fontWeight: '800',
            letterSpacing: '-1.5px',
            fontFamily: 'Georgia, serif',
          }}
        >
          Ink<span style={{ color: '#b45309' }}>Space</span>
        </Link>

        {/* Main Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '34px',
          }}
        >
          <NavLink to="/" end style={navStyle}>
            Home
          </NavLink>

          <NavLink to="/about" style={navStyle}>
            About
          </NavLink>

          <NavLink to="/contact" style={navStyle}>
            Contact
          </NavLink>

          <NavLink to="/stories" style={navStyle}>
            Stories
          </NavLink>
        </div>

        {/* Authentication */}
        {loggedInUser ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
            }}
          >
            <span
              style={{
                color: '#44403c',
                fontFamily: 'Georgia, serif',
                fontSize: '14px',
              }}
            >
              Hi,{' '}
              <strong style={{ color: '#1c1917' }}>
                {loggedInUser.name}
              </strong>
            </span>

            <button
              onClick={handleLogout}
              style={{
                border: '1px solid #d6cec3',
                backgroundColor: 'transparent',
                color: '#1c1917',
                padding: '9px 15px',
                fontFamily: 'Georgia, serif',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Link
              to="/login"
              style={{
                textDecoration: 'none',
                color: '#44403c',
                fontSize: '14px',
                fontWeight: '600',
                padding: '9px 15px',
              }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{
                textDecoration: 'none',
                color: '#ffffff',
                backgroundColor: '#1c1917',
                fontSize: '14px',
                fontWeight: '600',
                padding: '10px 18px',
                borderRadius: '6px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.12)',
              }}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar