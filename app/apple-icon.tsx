import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#470020',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="white" d="m217.21,333.11l-42.9,283.47-30.72-53.21c-18.34-31.77-18.34-70.95,0-102.72l73.63-127.53Z"/>
          <path fill="white" d="m279.17,264.28l119.39,592.46h-26.28c-36.7,0-70.62-19.59-88.98-51.36l-89.16-154.46,85.03-386.64Z"/>
          <path fill="white" d="m329.48,255.86l361.83,592.93c-12.34,5.18-25.77,7.94-39.6,7.94h-242.1l-80.12-600.87Z"/>
          <path fill="white" d="m782.94,291.83l-302.16-124.56h170.93c36.7,0,70.62,19.59,88.98,51.36l42.26,73.2Z"/>
          <path fill="white" d="m373.88,230.76l478.11,381.77-111.31,192.84c-10.6,18.32-26.35,32.6-44.85,41.39L373.88,230.76Z"/>
          <path fill="white" d="m880.4,563.36l-23.05,39.92L407.02,191.99l395.07,133,78.31,135.65c18.36,31.77,18.36,70.95,0,102.72Z"/>
        </svg>
      </div>
    ),
    { ...size }
  )
}
