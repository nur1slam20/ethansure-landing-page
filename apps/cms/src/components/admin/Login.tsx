'use client'

import React, { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function CustomLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Login failed')
      }

      // Redirect to admin dashboard
      router.push('/admin')
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      padding: '2rem',
    }}>
      {/* Custom Logo */}
      <div style={{ marginBottom: '3rem' }}>
        <svg
          width="120"
          height="40"
          viewBox="0 0 120 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Payload Logo - simplified hexagon pattern */}
          <path
            d="M20 10 L30 5 L40 10 L40 20 L30 25 L20 20 Z"
            fill="#1a1a1a"
          />
          <path
            d="M35 10 L45 5 L55 10 L55 20 L45 25 L35 20 Z"
            fill="#1a1a1a"
          />
          <text
            x="60"
            y="18"
            fontSize="20"
            fontWeight="600"
            fill="#1a1a1a"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            Payload
          </text>
          <text
            x="105"
            y="12"
            fontSize="8"
            fill="#666"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            ®
          </text>
        </svg>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '400px',
        }}
      >
        {/* Email Field */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '14px',
              fontWeight: '500',
              color: '#1a1a1a',
            }}
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '14px',
              border: '1px solid #d1d1d1',
              borderRadius: '4px',
              outline: 'none',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#666'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#d1d1d1'
            }}
          />
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label
            htmlFor="password"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '14px',
              fontWeight: '500',
              color: '#1a1a1a',
            }}
          >
            Password *
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '14px',
              border: '1px solid #d1d1d1',
              borderRadius: '4px',
              outline: 'none',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#666'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#d1d1d1'
            }}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            marginBottom: '1rem',
            padding: '0.75rem',
            backgroundColor: '#fee',
            color: '#c33',
            borderRadius: '4px',
            fontSize: '14px',
          }}>
            {error}
          </div>
        )}

        {/* Forgot Password Link */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link
            href="/admin/forgot"
            style={{
              fontSize: '14px',
              color: '#1a1a1a',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#666'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#1a1a1a'
            }}
          >
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '0.75rem',
            fontSize: '16px',
            fontWeight: '500',
            color: '#ffffff',
            backgroundColor: loading ? '#999' : '#4a4a4a',
            border: 'none',
            borderRadius: '6px',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            if (!loading) {
              e.currentTarget.style.backgroundColor = '#3a3a3a'
            }
          }}
          onMouseLeave={(e) => {
            if (!loading) {
              e.currentTarget.style.backgroundColor = '#4a4a4a'
            }
          }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

