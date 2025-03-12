import React from 'react';
import { MdDelete } from 'react-icons/md';

const User = ({user, handleDelete}) => {

    const {_id ,name, photo, email,lastSignInTime, createdAt} =user;
    return (
        <tr>
        <th>
          
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
          <p className='text-sm'>{createdAt}</p>
          
        </td>
        <td>{lastSignInTime}</td>
        <th>
          <button onClick={()=> handleDelete(_id)} className="btn bg-red-800 text-white"><MdDelete /></button>
        </th>
      </tr>
    );
};

export default User;