import React, { useState, useEffect } from 'react';

export default function DepartmentMembers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const existingUsers = localStorage.getItem("users");
    if (existingUsers) {
      setUsers(JSON.parse(existingUsers));
    }
  }, []);

  return (
    <div>
      <h2>Department Members</h2>
      {users.length > 0 ? (
        <table border="1" style={{ width: '10%' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>{user.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No registered users yet.</p>
      )}
    </div>
  );
}
