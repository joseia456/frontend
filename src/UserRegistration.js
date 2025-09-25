import React, { useState } from 'react';

function UserRegistration() {
  const [form, setForm] = useState({ name: '', age: '', place: '', userId: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/addUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        setMessage('User registered successfully!');
        setForm({ name: '', age: '', place: '', userId: '', password: '' });
      } else {
        setMessage('Registration failed.');
      }
    } catch (error) {
      setMessage('Error connecting to server.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f5f5f5' }}>
      <div style={{ background: '#fff', padding: '40px 32px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', minWidth: '340px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '24px' }}>User Registration</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px', textAlign: 'left' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '6px' }}>Name</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} required />
          </div>
          <div style={{ marginBottom: '16px', textAlign: 'left' }}>
            <label htmlFor="age" style={{ display: 'block', marginBottom: '6px' }}>Age</label>
            <input type="number" id="age" name="age" value={form.age} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} required />
          </div>
          <div style={{ marginBottom: '16px', textAlign: 'left' }}>
            <label htmlFor="place" style={{ display: 'block', marginBottom: '6px' }}>Place</label>
            <input type="text" id="place" name="place" value={form.place} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} required />
          </div>
          <div style={{ marginBottom: '16px', textAlign: 'left' }}>
            <label htmlFor="userId" style={{ display: 'block', marginBottom: '6px' }}>User ID</label>
            <input type="text" id="userId" name="userId" value={form.userId} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} required />
          </div>
          <div style={{ marginBottom: '24px', textAlign: 'left' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '6px' }}>Password</label>
            <input type="password" id="password" name="password" value={form.password} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} required />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
            Register
          </button>
        </form>
        {message && <div style={{ marginTop: '16px', color: '#1976d2' }}>{message}</div>}
      </div>
    </div>
  );
}

export default UserRegistration;
