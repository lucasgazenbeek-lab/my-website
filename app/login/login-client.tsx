'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Ongeldig e-mailadres of wachtwoord')
      setLoading(false)
    } else {
      router.push('/dashboard/pipeline')
      router.refresh()
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f0eff2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
      padding: '20px',
    }}>
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div style={{
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 8px 40px rgba(0,0,0,.10)',
        width: '100%',
        maxWidth: '420px',
        overflow: 'hidden',
      }}>
        {/* Header bordeaux */}
        <div style={{
          background: '#470020',
          padding: '32px 36px 28px',
          textAlign: 'center',
        }}>
          {/* Logo */}
          <div style={{ marginBottom: '16px' }}>
            <img
              src="/logo-nav-white.png"
              alt="GridState"
              style={{ height: '36px', objectFit: 'contain' }}
            />
          </div>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '2px',
            color: 'rgba(199,179,172,0.7)',
            textTransform: 'uppercase',
          }}>
            Intern Dashboard
          </div>
        </div>

        {/* Form */}
        <div style={{ padding: '32px 36px 36px' }}>
          <h1 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#1a0d1e',
            marginBottom: '6px',
          }}>
            Inloggen
          </h1>
          <p style={{ fontSize: '13px', color: '#8c7f97', marginBottom: '24px' }}>
            Toegang voor GridState medewerkers
          </p>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '11px',
                fontWeight: 700,
                color: '#5a4f62',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '6px',
              }}>
                E-mailadres
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="naam@gridstate.nl"
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  border: '1px solid #e2e0e5',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#1a0d1e',
                  background: '#f7f6f8',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter, sans-serif',
                }}
                onFocus={e => e.target.style.borderColor = '#470020'}
                onBlur={e => e.target.style.borderColor = '#e2e0e5'}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '11px',
                fontWeight: 700,
                color: '#5a4f62',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '6px',
              }}>
                Wachtwoord
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  border: '1px solid #e2e0e5',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#1a0d1e',
                  background: '#f7f6f8',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter, sans-serif',
                }}
                onFocus={e => e.target.style.borderColor = '#470020'}
                onBlur={e => e.target.style.borderColor = '#e2e0e5'}
              />
            </div>

            {error && (
              <div style={{
                background: 'rgba(192,57,43,.07)',
                border: '1px solid rgba(192,57,43,.18)',
                borderRadius: '8px',
                padding: '10px 14px',
                fontSize: '12px',
                color: '#c0392b',
                marginBottom: '16px',
                fontWeight: 500,
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '13px',
                background: loading ? '#7a3e40' : '#470020',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: 'Inter, sans-serif',
                transition: 'background 0.2s',
              }}
            >
              {loading ? 'Inloggen...' : 'Inloggen →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
