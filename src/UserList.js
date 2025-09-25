import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching users.');
        setLoading(false);
      });
  }, []);

  const handleAction = (userId, action) => {
    // Placeholder for approve/reject logic
    alert(`${action} user with ID: ${userId}`);
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{ padding: '40px' }}>
      <h2>Registered Users</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Age</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Place</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{user.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{user.age}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{user.place}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                <button style={{ marginRight: '8px', background: '#4caf50', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }} onClick={() => handleAction(user.id, 'Approve')}>Approve</button>
                <button style={{ background: '#f44336', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }} onClick={() => handleAction(user.id, 'Reject')}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
