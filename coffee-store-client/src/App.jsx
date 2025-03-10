
import { useLoaderData } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import DisplayCoffee from './components/displayCoffee';


function App() {
  const coffee =useLoaderData();

  return (
    <>
    <Navbar></Navbar>
    
     <h1>Hello</h1>
      <DisplayCoffee coffee={coffee}></DisplayCoffee>
    </>
  )
}

export default App
