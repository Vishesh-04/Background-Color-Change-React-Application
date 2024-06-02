import { useState } from 'react'


function App() {
  const [color, setColor] = useState()

  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{background:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-slate-700 rounded-full text-white">
          <div className="flex flex-wrap justify-center gap-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")} 
              className="px-4 py-1 rounded-full  shadow-xl" 
              style={{background:"red"}}>Red
            </button>
            <button onClick={() => setColor("blue")} 
              className="px-4 py-1 rounded-full shadow-xl" 
              style={{background:"blue"}}>Blue
            </button>
            <button onClick={() => setColor("green")} 
              className="px-4 py-1 rounded-full shadow-xl" 
              style={{background:"green"}}>Green
            </button>
            <button onClick={() => setColor("black")} 
              className="px-4 py-1 rounded-full shadow-xl" 
              style={{background:"black"}}>Black
            </button>
            <button onClick={() => setColor("brown")} 
              className="px-4 py-1 rounded-full shadow-xl" 
              style={{background:"brown"}}>Brown
            </button>
            <button onClick={() => setColor("olive")} 
              className="px-4 py-1 rounded-full shadow-xl" 
              style={{background:"olive"}}>Olive
            </button>
            <button onClick={() => setColor("orange")} 
              className="px-4 py-1 rounded-full shadow-xl" 
              style={{background:"orange"}}>Orange
            </button>
            <button onClick={() => setColor("white")} 
              className="px-4 py-1 rounded-full text-black shadow-xl" 
              style={{background:"white"}}>White
            </button>
            <button onClick={() => setColor("yellow")} 
              className="px-4 py-1 rounded-full text-black shadow-xl" 
              style={{background:"yellow"}}>Yellow
            </button>
            <button onClick={() => setColor("purple")} 
              className="px-4 py-1 rounded-full shadow-xl" 
              style={{background:"purple"}}>Purple
            </button>
            <button onClick={() => setColor("grey")} 
              className="px-4 py-1 rounded-full shadow-xl" 
              style={{background:"grey"}}>Grey
            </button>
            <button onClick={() => setColor("pink")} 
              className="px-4 py-1 rounded-full shadow-xl text-black" 
              style={{background:"pink"}}>Pink
            </button>
            <button onClick={() => setColor("lavender")} 
              className="px-4 py-1 rounded-full shadow-xl text-black" 
              style={{background:"lavender"}}>Lavender
            </button>
          </div>
        </div> 
      </div>
    </>
  )
}

export default App
