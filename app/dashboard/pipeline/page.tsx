export default function PipelinePage() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <iframe
        src="/tools/pipeline.html"
        style={{
          flex: 1,
          border: 'none',
          width: '100%',
          height: '100%',
        }}
        title="GridState Pipeline & Cashflow"
      />
    </div>
  )
}
