import react,{useId} from 'react'

const InputBox = ({
    label,
    amount, 
    onAmountChange,
    onCurrChange,
    currencyOptions=[],
    selectedCurr="usd"
}
) => {
    const amntId=useId()// not necessary
    return ( 
        <>
                <div className='relative'>
                <label htmlFor={amntId} //binds label and input
                className=" text-black ml-1 font-semibold text-xl">
                    {label}
                </label>
                
                <input className="bg-white h-15 w-100  rounded-2xl pl-4"
                id={amntId} //binds label and input
                type="number"
                placeholder='Enter Amount'
                value={amount}
                onChange={(e)=> onAmountChange &&
                    onAmountChange(Number(e.target.value))
                }/>

                <select className="absolute right-5 top-13 transform -translate-y-1/2 rounded-lg px-1 py-1 bg-gray-300 cursor-pointer outline-none w-15"
                value={selectedCurr}
                onChange={(e)=> onCurrChange &&
                    onCurrChange(e.target.value)}
                >
                    {currencyOptions.map((currency)=>(
                       <option key={currency} value={currency}>
                       {currency}
                       </option>
                    ))}
                </select>
                </div>
        </>
     );
}
 
export default InputBox;