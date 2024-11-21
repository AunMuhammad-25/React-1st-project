import { useState } from 'react'
import './App.css'
import Header from './Header';
import Section from './section';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import Section6 from './section6';
import Section8 from './section8';


function App() {
  const [count, setCount] = useState(0)

  return (
   
    <>
    <Header/>
    <Section/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section8/>
    </>
  )
}

export default App;
