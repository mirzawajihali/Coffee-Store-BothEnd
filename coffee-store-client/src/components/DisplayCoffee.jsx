import React, { useState } from 'react';
import Coffee from './Coffee';

const DisplayCoffee = ({coffee}) => {

    const [coffees, setCoffees] = useState(coffee);
  
    return (
        <div>
            <h1 className='text-4xl text-center font-bold my-5'>All the Coffees : </h1>
            <div className='p-1 flex flex-wrap items-center justify-center'>
                {
                    coffees.map(coffee => <Coffee key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></Coffee>)
                }
            </div>
        </div>
    );
};

export default DisplayCoffee;