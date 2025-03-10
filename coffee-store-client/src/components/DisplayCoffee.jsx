import React from 'react';
import Coffee from './Coffee';

const DisplayCoffee = ({coffee}) => {
  
    return (
        <div>
            <h1>All the coffee : </h1>
            <div className='p-1 flex flex-wrap items-center justify-center'>
                {
                    coffee.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
                }
            </div>
        </div>
    );
};

export default DisplayCoffee;