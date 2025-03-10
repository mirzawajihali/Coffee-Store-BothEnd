
import { useLoaderData } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import DisplayCoffee from './components/displayCoffee';
import ExtraSection from './components/ExtraSection';
import Header from './components/Header';


function App() {
  const coffee =useLoaderData();

  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
    
     
      <DisplayCoffee coffee={coffee}></DisplayCoffee>

      <ExtraSection></ExtraSection>
    </>
  )
}

export default App
