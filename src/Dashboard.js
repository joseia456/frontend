import React from 'react';

function Dashboard() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f5f5f5' }}>
      <div style={{ background: '#fff', padding: '40px 32px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', minWidth: '340px', textAlign: 'center' }}>
        <h1>User Dashboard</h1>
        <p>Welcome to your dashboard!</p>
      </div>
    </div>
  );
}

export default Dashboard;
