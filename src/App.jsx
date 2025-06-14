import { useState } from 'react'
import './App.css'
import { InputBox } from './components'

import useCurrencyInfo from './hooks/useCurrencyinfo';

function App() {

  const [amount, setAmount] = useState(0);

  const [from, setFrom] = useState("usd")

  const [to, setTo] = useState("inr")

  const [convertedAmount, setConvertedAmount] = useState(0)

  const useCurrencyInfo2 = useCurrencyInfo(from)

  const options = Object.keys(useCurrencyInfo2)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * useCurrencyInfo[to])
  }

  

  return (
    <>
    {/* <h1> Anshu Kumar </h1> */}
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1621378864046-0122e4a415a5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                  //to prevent the page from going anywhere
                    e.preventDefault();
                    convert()
                   
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setAmount(amount)}
                        selectCurrency={from}
                        onAmountChange={(amount) => setAmount(amount)}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setTo(currency)}
                        selectCurrency={from}
                        //for user not to change the converted amount
                        amountDisable
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
</>
);
}

export default App
