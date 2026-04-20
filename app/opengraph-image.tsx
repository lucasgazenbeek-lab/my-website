import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a0810',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Left scarlet accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 8,
            height: '100%',
            background: '#470020',
          }}
        />

        {/* Background radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '70%',
            height: '140%',
            background: 'radial-gradient(ellipse at center, rgba(71,0,32,0.35) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Icon */}
        <div
          style={{
            position: 'absolute',
            right: 80,
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: 0.15,
            display: 'flex',
          }}
        >
          <svg width="380" height="380" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="m217.21,333.11l-42.9,283.47-30.72-53.21c-18.34-31.77-18.34-70.95,0-102.72l73.63-127.53Z"/>
            <path fill="white" d="m279.17,264.28l119.39,592.46h-26.28c-36.7,0-70.62-19.59-88.98-51.36l-89.16-154.46,85.03-386.64Z"/>
            <path fill="white" d="m329.48,255.86l361.83,592.93c-12.34,5.18-25.77,7.94-39.6,7.94h-242.1l-80.12-600.87Z"/>
            <path fill="white" d="m782.94,291.83l-302.16-124.56h170.93c36.7,0,70.62,19.59,88.98,51.36l42.26,73.2Z"/>
            <path fill="white" d="m373.88,230.76l478.11,381.77-111.31,192.84c-10.6,18.32-26.35,32.6-44.85,41.39L373.88,230.76Z"/>
            <path fill="white" d="m880.4,563.36l-23.05,39.92L407.02,191.99l395.07,133,78.31,135.65c18.36,31.77,18.36,70.95,0,102.72Z"/>
          </svg>
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 80,
            paddingRight: 80,
            maxWidth: 700,
          }}
        >
          {/* Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 32,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: 3, background: '#C7B3AC' }} />
            <span
              style={{
                color: 'rgba(199,179,172,0.7)',
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Benelux EPC Specialist
            </span>
          </div>

          {/* Company name */}
          <div
            style={{
              color: 'white',
              fontSize: 96,
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
              marginBottom: 28,
            }}
          >
            Gridstate
          </div>

          {/* Divider */}
          <div
            style={{
              width: 60,
              height: 3,
              background: '#470020',
              marginBottom: 28,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: 24,
              fontWeight: 500,
              lineHeight: 1.5,
              maxWidth: 520,
            }}
          >
            Turnkey EPC Batterijopslag Benelux
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 80,
            color: 'rgba(255,255,255,0.25)',
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: '0.05em',
            display: 'flex',
          }}
        >
          gridstate.nl
        </div>
      </div>
    ),
    { ...size }
  )
}
