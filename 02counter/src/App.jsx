import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setcounter] = useState(0)
// [variable,method hai ye ek jo uss varible ki value set karega ]


// let counter = 15

const addValue = () => {
  //  counter = counter+1
  if (counter<20) {
    setcounter(counter+1)
  }
  else{setcounter(0)}
    
}


const removeValue =()=>{
  if (counter==0) {
    setcounter(0)
  }
   else{
    setcounter(counter-1)
   }



}

  return (
   <>
   <h1> chai aur code </h1>
   <h2>counter value :{counter} </h2>
   <button onClick = {addValue}>
    addvalue {counter}</button>
   <br/>
   <button onClick = {removeValue}>
    decrease value {counter}</button>
   <p>footer:{counter}</p>


   </>
  )
}

export default App
