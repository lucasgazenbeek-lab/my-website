export default function BusinessCasePage() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <iframe
        src="/tools/businesscase.html"
        style={{
          flex: 1,
          border: 'none',
          width: '100%',
          height: '100%',
        }}
        title="GridState Zon + BESS Businesscase"
      />
    </div>
  )
}
