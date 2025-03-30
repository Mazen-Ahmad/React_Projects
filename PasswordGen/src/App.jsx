import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8);
    const [numThere, setnumThere] = useState(false);
    const [charThere, setcharThere] = useState(false);
    const [password, setpassword] = useState("");

    const passwordRef=useRef(null)
    
    const copy=()=>{
      passwordRef.current?.select()//not necessary, just to give selection highlight
      passwordRef.current?.setSelectionRange(0,5)//highlihts the given range, but will still copy all password 
       window.navigator.clipboard.writeText(password)
    }
    
    const passwordGen = useCallback(() => {
      let pass=""
      let st="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      let num="0123456789"
      let char="`~@!#$%^&*(){}[]:;<>,./?"
      
      if(numThere) st=st+num
      if(charThere) st=st+char
      for(let i=1;i<=length;i++){
        let charAdd=Math.floor(Math.random()* st.length+1)
        pass=pass+st.charAt(charAdd)
      }
      setpassword(pass)
    },[length, numThere,charThere,setpassword /*Not neccesary, optional for memoisation*/])

    useEffect(()=>{
      passwordGen()
    },[length, numThere, charThere]) //check this
  return (
    <>
    

      <div className='w-full h-screen bg-black flex justify-center'>
        <div className='w-150 h-30 bg-gray-800 flex flex-wrap mt-15 rounded-2xl justify-center items-center'>
          <input type="text" 
          value={password}
          placeholder='Password'
          readOnly
          className='w-120 h-10 bg-white mt-5 rounded-l-xl'
          ref={passwordRef}
          />
          

          <button onClick={copy} className='bg-blue-600 cursor-pointer w-15 mt-5 h-10 rounded-r-xl'>Copy</button>

          <input className='mr-2' //SLIDER
          type='range'
          onChange={(e)=>{setlength(e.target.value)}}
          min={6}
          max={50}
          value={length}/>
          <label className='text-orange-600 mr-10'>Length: {length}</label>

          <input className='mr-1' //NUM CHECKBOX
          type='checkbox'
          defaultChecked={numThere}
          onChange={()=>{
            setnumThere((prev)=>!prev)
          }}/>
          <label className='text-orange-600 mr-10 '>Number</label>
        
          <input className='mr-1' //CHAR CHECKBOX
          type='checkbox'
          defaultChecked={charThere}
          onChange={()=>{
            setcharThere((prev)=>!prev)
          }}/>
          <label className='text-orange-600 '>Character</label>

        </div>
      </div>
    </>
  )
}

export default App
