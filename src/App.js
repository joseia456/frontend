

import { useNavigate } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  // Admin login state
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');

  // User registration navigation
  const handleUserRegister = () => {
    navigate('/register');
  };

  // Admin login handler
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setAdminError('');
    try {
      const response = await fetch('http://localhost:8081/admin/adminLogin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminId, password: adminPassword })
      });
      const result = await response.text();
      if (result === 'success') {
        navigate('/userlist');
      } else {
        setAdminError('Invalid admin credentials');
      }
    } catch (err) {
      setAdminError('Error connecting to server');
    }
  };

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f5f5f5' }}>
      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
        {/* User Registration Section */}
        <div style={{ background: '#fff', padding: '40px 32px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', minWidth: '340px', textAlign: 'center' }}>
          <h1 style={{ marginBottom: '24px' }}>User Registration</h1>
          <div style={{ marginBottom: '20px', fontSize: '15px' }}>
            Already an admin?{' '}
            <span style={{ color: '#1976d2', textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => {}}>
              Login on right
            </span>
          </div>
          <button onClick={handleUserRegister} style={{ width: '100%', padding: '10px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
            Register as User
          </button>
        </div>
        {/* Admin Login Section */}
        <div style={{ background: '#fff', padding: '40px 32px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', minWidth: '320px', textAlign: 'center' }}>
          <h1 style={{ marginBottom: '24px' }}>Admin Login</h1>
          <form onSubmit={handleAdminLogin}>
            <div style={{ marginBottom: '16px', textAlign: 'left' }}>
              <label htmlFor="adminId" style={{ display: 'block', marginBottom: '6px' }}>Admin ID</label>
              <input type="text" id="adminId" name="adminId" value={adminId} onChange={e => setAdminId(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} required />
            </div>
            <div style={{ marginBottom: '24px', textAlign: 'left' }}>
              <label htmlFor="adminPassword" style={{ display: 'block', marginBottom: '6px' }}>Password</label>
              <input type="password" id="adminPassword" name="adminPassword" value={adminPassword} onChange={e => setAdminPassword(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} required />
            </div>
            <button type="submit" style={{ width: '100%', padding: '10px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
              Login
            </button>
            {adminError && <div style={{ color: 'red', marginTop: '12px' }}>{adminError}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
