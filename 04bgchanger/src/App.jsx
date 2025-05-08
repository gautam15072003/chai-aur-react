import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return ( 
   <>
    <div className="w-full h-screen duration-75 "
    style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center 
      bottom-10 inset-x-0 px-3">
        <div className="flex flex-wrap gap-2 shadow-xl bg-white px-3 py-3 rounded-3xl">
          <button onClick={()=>setColor("red")}
          className=" outline-none px-4 py-1 rounded-3xl text-white shadow-2xl "
          style={{background:"red"}}>
            Red
          </button>
          <button onClick={()=>setColor("green")}
          className=" outline-none px-4 py-1 rounded-3xl text-white shadow-2xl "
          style={{background:"green"}}>
            Green
          </button>
          <button onClick={()=>setColor("blue")}
           className=" outline-none px-4 py-1 rounded-3xl text-white shadow-2xl "
          style={{background:"blue"}}>
            Blue
          </button>
          <button onClick={()=>setColor("lavender")}
           className=" outline-none px-4 py-1 rounded-3xl text-white shadow-xl"
          style={{background:"lavender"}}>
            Lavender
          </button>
          <button onClick={()=>setColor("pink")}
           className=" outline-none px-4 py-1 rounded-3xl text-white shadow-2xl "
          style={{background:"pink"}}>
            Pink
          </button>
          <button onClick={()=>setColor("Black")}
           className=" outline-none px-4 py-1 rounded-3xl text-white shadow-2xl "
          style={{background:"black"}}>
            kaala
          </button>
          <button onClick={()=>setColor("yellow")}
           className=" outline-none px-4 py-1 rounded-3xl text-white shadow-2xl "
          style={{background:"yellow"}}>
            Yellow
          </button>
          <button onClick={()=>setColor("gray")}
           className=" outline-none px-4 py-1 rounded-3xl text-white shadow-2xl "
          style={{background:"gray"}}>
            Gray
          </button>
          <button onClick={()=>setColor("white")}
           className=" outline-none px-4 py-1 rounded-3xl text-black shadow-2xl "
          style={{background:"white"}}>
            white
          </button>
        </div>
        </div>
    </div>
   </>
  )
}

export default App
