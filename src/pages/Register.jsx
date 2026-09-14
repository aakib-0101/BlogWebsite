import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setError('')

    // Check passwords
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    // Check if user already exists
    const existingUser = localStorage.getItem('inkspaceUser')

    if (existingUser) {
      const user = JSON.parse(existingUser)

      if (user.email.toLowerCase() === email.toLowerCase()) {
        setError('An account with this email already exists.')
        return
      }
    }

    // Create user object
    const newUser = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: password,
    }

    // Save user
    localStorage.setItem('inkspaceUser', JSON.stringify(newUser))

    // Go to login page
    navigate('/login')
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
        padding: '60px 24px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '38px',
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
            Join InkSpace
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
            Create Account
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
            Create your account and become part of InkSpace.
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

            {/* Name */}
            <div style={{ marginBottom: '20px' }}>
              <label
                htmlFor="name"
                style={{
                  display: 'block',
                  marginBottom: '9px',
                  color: '#44403c',
                  fontSize: '13px',
                  fontWeight: '700',
                }}
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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

            {/* Email */}
            <div style={{ marginBottom: '20px' }}>
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
            <div style={{ marginBottom: '20px' }}>
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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="6"
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

            {/* Confirm Password */}
            <div style={{ marginBottom: '27px' }}>
              <label
                htmlFor="confirmPassword"
                style={{
                  display: 'block',
                  marginBottom: '9px',
                  color: '#44403c',
                  fontSize: '13px',
                  fontWeight: '700',
                }}
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength="6"
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
              Create Account
            </button>
          </form>
        </div>

        {/* Login Link */}
        <p
          style={{
            textAlign: 'center',
            margin: '25px 0 0',
            color: '#78716c',
            fontSize: '14px',
          }}
        >
          Already have an account?{' '}

          <Link
            to="/login"
            style={{
              color: '#1c1917',
              fontWeight: '700',
              textDecoration: 'none',
              borderBottom: '1px solid #1c1917',
              paddingBottom: '2px',
            }}
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  )
}

export default Register