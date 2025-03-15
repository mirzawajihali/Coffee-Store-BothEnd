import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';
import Swal from 'sweetalert2';

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);


    const handleDelete=(id)=>{
        Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                 
                    fetch(`https://coffee-store-server-one-rho.vercel.app/users/${id}`, {
                        method : "DELETE"
                    } )
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount > 0){
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                              )
        
                              const remaining = users.filter(user => user._id !== id);
                              setUsers(remaining);
                        }
                    })
                    }
                  });
        

    }
    return (
        <div>
            <h2 className='text-center text-4xl font-bold mb-6'>Number of Active Users :  {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name</th>
        <th>User Created At</th>
        <th>Last Sign In Time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
            {
                users.map(user => <User key={user._id} handleDelete={handleDelete} user={user}></User>)
            }
     
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default Users;