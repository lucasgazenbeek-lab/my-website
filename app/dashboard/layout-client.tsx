'use client'

import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { useEffect, useState } from 'react'

const NAV = [
  {
    section: 'Tools',
    items: [
      {
        id: 'pipeline',
        label: 'Pipeline & Cashflow',
        href: '/dashboard/pipeline',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18" />
          </svg>
        ),
      },
      {
        id: 'businesscase',
        label: 'Zon + BESS Businesscase',
        href: '/dashboard/businesscase',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
      },
      {
        id: 'calculator',
        label: 'BESS Calculator',
        href: '/dashboard/calculator',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <path d="M8 6h8M8 10h8M8 14h4" />
          </svg>
        ),
        soon: true,
      },
    ],
  },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()
  const [userEmail, setUserEmail] = useState('')
  const [initials, setInitials] = useState('GS')

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user?.email) {
        setUserEmail(user.email)
        const parts = user.email.split('@')[0].split('.')
        setInitials(parts.map((p: string) => p[0]?.toUpperCase() || '').join('').slice(0, 2) || 'GS')
      }
    })
  }, [])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      {/* Sidebar */}
      <aside style={{
        width: '220px',
        background: '#470020',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        zIndex: 20,
        boxShadow: '4px 0 20px rgba(71,0,32,.25)',
      }}>
        {/* Logo */}
        <div style={{
          padding: '20px 16px 18px',
          borderBottom: '1px solid rgba(255,255,255,.1)',
          textAlign: 'center',
        }}>
          <img
            src="/logo-nav-white.png"
            alt="GridState"
            style={{ height: '28px', objectFit: 'contain', marginBottom: '10px' }}
          />
          <div style={{
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.5px',
            color: 'rgba(199,179,172,.6)',
          }}>
            Intern Dashboard
          </div>
        </div>

        {/* Nav */}
        <nav style={{ padding: '16px 12px', flex: 1 }}>
          {NAV.map(group => (
            <div key={group.section}>
              <div style={{
                fontSize: '8px',
                fontWeight: 700,
                color: 'rgba(199,179,172,.5)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                padding: '0 10px',
                margin: '16px 0 5px',
              }}>
                {group.section}
              </div>
              {group.items.map(item => {
                const active = pathname.startsWith(item.href)
                return (
                  <button
                    key={item.id}
                    onClick={() => !item.soon && router.push(item.href)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '9px',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      cursor: item.soon ? 'default' : 'pointer',
                      color: active ? '#fff' : 'rgba(199,179,172,.8)',
                      fontSize: '12px',
                      fontWeight: active ? 600 : 500,
                      background: active ? 'rgba(255,255,255,.15)' : 'none',
                      border: 'none',
                      width: '100%',
                      textAlign: 'left',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '2px',
                      opacity: item.soon ? 0.5 : 1,
                      transition: 'all .18s',
                    }}
                    onMouseEnter={e => { if (!item.soon && !active) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.1)' }}
                    onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'none' }}
                  >
                    <span style={{ opacity: active ? 1 : 0.7, flexShrink: 0 }}>{item.icon}</span>
                    {item.label}
                    {item.soon && (
                      <span style={{
                        marginLeft: 'auto',
                        fontSize: '8px',
                        background: 'rgba(255,255,255,.1)',
                        color: 'rgba(199,179,172,.6)',
                        padding: '1px 5px',
                        borderRadius: '3px',
                        fontWeight: 700,
                        letterSpacing: '0.5px',
                      }}>
                        BINNENKORT
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          ))}
        </nav>

        {/* User + logout */}
        <div style={{ padding: '14px', borderTop: '1px solid rgba(255,255,255,.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,.2)',
              border: '2px solid rgba(255,255,255,.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 700,
              color: '#fff',
              flexShrink: 0,
            }}>
              {initials}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {userEmail || 'GridState'}
              </div>
              <div style={{ fontSize: '9px', color: 'rgba(199,179,172,.6)' }}>Intern</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              marginTop: '6px',
              padding: '6px 10px',
              background: 'rgba(255,255,255,.07)',
              border: '1px solid rgba(255,255,255,.12)',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '10px',
              color: 'rgba(199,179,172,.6)',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center',
              transition: 'all .18s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.13)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.07)'}
          >
            Uitloggen
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ marginLeft: '220px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </main>
    </div>
  )
}
