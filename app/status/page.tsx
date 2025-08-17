export default function StatusPage() {
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 65px)', overflow: 'hidden' }}>
      <iframe
        src="https://status.ets2la.cn/ets2la"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="ETS2LA Server Status"
      />
    </div>
  );
}
