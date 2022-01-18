import React, { FC } from 'react';
import { IUser } from '../types/types';

interface IUserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
};

const UserItem: FC<IUserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} style={{ padding: 15, border: '1px solid gray' }}>
      {user.id}: {user.name} проживает в {user.address.city} на улице {user.address.street}
    </div>
  )
};

export default UserItem;
