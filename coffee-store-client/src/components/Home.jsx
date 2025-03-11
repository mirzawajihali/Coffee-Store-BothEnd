import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';
import DisplayCoffee from './displayCoffee';
import ExtraSection from './ExtraSection';

const Home = () => {
    const coffee =useLoaderData();
    return (
        <div>
            <Header></Header>
            <DisplayCoffee coffee={coffee}></DisplayCoffee>
            <ExtraSection></ExtraSection>
    
        </div>
    );
};

export default Home;