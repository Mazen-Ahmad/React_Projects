import { useState } from 'react'
import Input from './components/Input'
import useCurrInfo from './hooks/useCurrInfo'

function App() {

  const [toAmount, settoAmount] = useState(0);
  const [fromAmount, setfromAmount] = useState();
  const [from, setfrom]=useState("usd")
  const [to, setto]=useState("inr")

  const currInfo = useCurrInfo(from)
  const options = Object.keys(currInfo)

  const swap=()=>{
    setfrom(to)
    setto(from)

    setfromAmount(toAmount)
    settoAmount(fromAmount)
  }
  
  const convert=()=>{
   settoAmount(fromAmount * currInfo[to])
  }

  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    convert()
                }}
            >
                <div className="w-full mb-1">
                    <Input
                        label="From"
                        amount={fromAmount}
                        currencyOptions={options}
                        onCurrChange={(currency) => setfrom(currency)}
                        selectedCurr={from}
                        onAmountChange={(amnt) => setfromAmount(amnt)}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 top-4 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <Input
                        label="To"
                        amount={toAmount}
                        currencyOptions={options}
                        onCurrChange={(currency) => setto(currency)}
                        selectedCurr={to}
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
)
}

export default App
