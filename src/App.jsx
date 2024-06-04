import { useState } from "react";


function App() {

  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 bg-white px-4 py-3 rounded-full shadow-2xl">
          <button 
          onClick={()=> setColor("red")}
          className="px-4 py-2 rounded-full text-white shadow-lg
          transition ease-in-out hover:-translate-y-1 hover:scale-1 duration-200"
          style={{backgroundColor: 'red'}}>Red</button>

          <button 
          onClick={()=> setColor("green")}
          className="px-4 py-2 rounded-full text-white shadow-lg
          transition ease-in-out hover:-translate-y-1 hover:scale-1 duration-200"
          style={{backgroundColor: 'green'}}>Green</button>

          <button 
          onClick={()=> setColor("blue")}
          className="px-4 py-2 rounded-full text-white shadow-lg
          transition ease-in-out hover:-translate-y-1 hover:scale-1 duration-200"
          style={{backgroundColor: 'blue'}}>Blue</button>

          <button 
          onClick={()=> setColor("olive")}
          className="px-4 py-2 rounded-full text-white shadow-lg
          transition ease-in-out hover:-translate-y-1 hover:scale-1 duration-200"
          style={{backgroundColor: 'olive'}}>Olive</button>
          
          <button 
          onClick={()=> setColor("gray")}
          className="px-4 py-2 rounded-full text-white shadow-lg
          transition ease-in-out hover:-translate-y-1 hover:scale-1 duration-200"
          style={{backgroundColor: 'gray'}}>Gray</button>

          <button 
          onClick={()=> setColor("yellow")}
          className="px-4 py-2 rounded-full text-back shadow-lg
          transition ease-in-out hover:-translate-y-1 hover:scale-1 duration-200"
          style={{backgroundColor: 'yellow'}}>Yellow</button>

          <button 
          onClick={()=> setColor("pink")}
          className="px-4 py-2 rounded-full text-back shadow-lg
          transition ease-in-out hover:-translate-y-1 hover:scale-1 duration-200"
          style={{backgroundColor: 'pink'}}>Pink</button>
          
          <button 
          onClick={()=> setColor("purple")}
          className="px-4 py-2 rounded-full text-white shadow-lg
          transition ease-in-out hover:-translate-y-1 hover:scale-1 duration-200"
          style={{backgroundColor: 'purple'}}>Purple</button>

          <button 
          onClick={()=> setColor("lavender")}
          className="px-4 py-2 rounded-full text-black shadow-lg
          transition ease-in-out hover:-translate-y-1 hover:scale-1 duration-200"
          style={{backgroundColor: 'lavender'}}>Lavender</button>

          <button 
          onClick={()=> setColor("white")}
          className="px-4 py-2 rounded-full text-black shadow-lg
          transition ease-in-out hover:-translate-y-1 hover:scale-1 duration-200"
          style={{backgroundColor: 'white'}}>White</button>
          
          <button 
          onClick={()=> setColor("black")}
          className="px-4 py-2 rounded-full text-white shadow-lg
          transition ease-in-out hover:-translate-y-1 hover:scale-1 duration-200"
          style={{backgroundColor: 'black'}}>Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
