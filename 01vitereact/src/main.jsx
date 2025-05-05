import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1> custom App ! </h1>
    </div>
  )
}
// const reactElement = {
//   type: 'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   Children:'click me too visit google '
// }
const ekaurElement = "chai aur code"


const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me too visit google',
  'ekaurElement'
)

const anotherElement = (
  <a href="https://google.com" target ='_blank'>visit google</a>
) 

createRoot(document.getElementById('root')).
render(
  
reactElement
)
