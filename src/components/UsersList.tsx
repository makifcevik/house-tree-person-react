import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IUser from "../models/IUser";

const UsersTest: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users')
      .then(response => {
        // If Laravel wraps data in { data: [...] }, use response.data.data
        console.log('Response:', response.data);
        const data = Array.isArray(response.data) ? response.data : response.data.data;
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.id} - {user.first_name} {user.last_name} - {user.email} - User Privilege: {user.privilege}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersTest;
