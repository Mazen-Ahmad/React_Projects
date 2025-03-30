import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  
  return (
    <div className='w-full h-screen flex justify-center' style={{backgroundColor:color}}>
        <div className='bg-white h-15 w-280 rounded-2xl mt-8 flex justify-center items-center space-x-18'>
          
          <button className='bg-amber-400 rounded-full w-25 h-10 font-extrabold cursor-pointer' onClick={()=>setColor("red")}>RED</button>
          <button className='bg-amber-400 rounded-full w-25 h-10 font-extrabold cursor-pointer' onClick={()=>setColor("blue")}>BLUE</button>
          <button className='bg-amber-400 rounded-full w-25 h-10 font-extrabold cursor-pointer' onClick={()=>setColor("yellow")}>YELLOW</button>
          <button className='bg-amber-400 rounded-full w-25 h-10 font-extrabold cursor-pointer' onClick={()=>setColor("green")}>GREEN</button>
          <button className='bg-amber-400 rounded-full w-25 h-10 font-extrabold cursor-pointer' onClick={()=>setColor("orange")}>ORANGE</button>
          <button className='bg-amber-400 rounded-full w-25 h-10 font-extrabold cursor-pointer' onClick={()=>setColor("purple")}>PURPLE</button>
        </div>
    </div>
  )
}

export default App
