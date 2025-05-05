import Chai from "./Chai"

function App() {
 const userName = "kashish aur motivation"

  return (
    <>    {/* ye jo khaali tags hai ye fragements kehlaye gaye kyuki ye ek hi element export krr sakte hai  */}

    <Chai/>
    <h3>chai aur code {userName}</h3> 
    <p> test para</p>
    </>
    // evaluated expression {userName}
  
  )
}

export default App
