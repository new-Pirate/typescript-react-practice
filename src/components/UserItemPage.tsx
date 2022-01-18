import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IUser } from '../types/types';

const UserItemPage:FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const res = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <button onClick={() => navigate('/users')}>Back</button>
      <div>{user?.email}</div>
      <div>{user?.address.city} {user?.address.street} {user?.address.zipcode}</div>
    </div>
  )
};

export default UserItemPage;
