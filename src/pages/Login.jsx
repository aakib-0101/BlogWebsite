import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setError('')

    // Get registered user
    const savedUser = localStorage.getItem('inkspaceUser')

    if (!savedUser) {
      setError('No account found. Please register first.')
      return
    }

    const user = JSON.parse(savedUser)

    // Check email and password
    if (
      email.trim().toLowerCase() === user.email &&
      password === user.password
    ) {
      // Save logged-in user
      localStorage.setItem(
        'inkspaceLoggedIn',
        JSON.stringify({
          name: user.name,
          email: user.email,
        })
      )

      // Tell Navbar that login happened
      window.dispatchEvent(new Event('authChanged'))

      // Go back to previous page or home
      const destination = location.state?.from || '/'

      navigate(destination, { replace: true })
    } else {
      setError('Incorrect email or password.')
    }
  }

  return (
    <main
      style={{
        minHeight: 'calc(100vh - 70px)',
        backgroundColor: '#f7f3ed',
        color: '#1c1917',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '70px 24px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '42px',
          }}
        >
          <p
            style={{
              margin: '0 0 15px',
              color: '#b45309',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
            }}
          >
            Welcome Back
          </p>

          <h1
            style={{
              margin: 0,
              fontFamily: 'Georgia, serif',
              fontSize: '48px',
              lineHeight: '1',
              letterSpacing: '-1.5px',
            }}
          >
            Sign In
          </h1>

          <p
            style={{
              margin: '18px 0 0',
              color: '#78716c',
              fontFamily: 'Georgia, serif',
              fontSize: '15px',
              lineHeight: '1.6',
            }}
          >
            Continue your journey through InkSpace.
          </p>
        </div>

        {/* Form Card */}
        <div
          style={{
            backgroundColor: '#fbf8f3',
            border: '1px solid #ded7cd',
            padding: '38px',
            boxSizing: 'border-box',
          }}
        >
          <form onSubmit={handleSubmit}>

            {/* Error */}
            {error && (
              <div
                style={{
                  marginBottom: '22px',
                  padding: '12px 14px',
                  border: '1px solid #d6b5a9',
                  backgroundColor: '#f8ece7',
                  color: '#9f2f18',
                  fontSize: '13px',
                  lineHeight: '1.5',
                }}
              >
                {error}
              </div>
            )}

            {/* Email */}
            <div style={{ marginBottom: '22px' }}>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  marginBottom: '9px',
                  color: '#44403c',
                  fontSize: '13px',
                  fontWeight: '700',
                }}
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '13px 14px',
                  border: '1px solid #d6cec3',
                  backgroundColor: '#f7f3ed',
                  color: '#1c1917',
                  fontFamily: 'Georgia, serif',
                  fontSize: '15px',
                  outline: 'none',
                }}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: '27px' }}>
              <label
                htmlFor="password"
                style={{
                  display: 'block',
                  marginBottom: '9px',
                  color: '#44403c',
                  fontSize: '13px',
                  fontWeight: '700',
                }}
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '13px 14px',
                  border: '1px solid #d6cec3',
                  backgroundColor: '#f7f3ed',
                  color: '#1c1917',
                  fontFamily: 'Georgia, serif',
                  fontSize: '15px',
                  outline: 'none',
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                width: '100%',
                border: 'none',
                backgroundColor: '#1c1917',
                color: '#ffffff',
                padding: '14px 20px',
                fontFamily: 'Georgia, serif',
                fontSize: '15px',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Register */}
        <p
          style={{
            textAlign: 'center',
            margin: '25px 0 0',
            color: '#78716c',
            fontSize: '14px',
          }}
        >
          Don't have an account?{' '}

          <Link
            to="/register"
            style={{
              color: '#1c1917',
              fontWeight: '700',
              textDecoration: 'none',
              borderBottom: '1px solid #1c1917',
              paddingBottom: '2px',
            }}
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  )
}

export default Login