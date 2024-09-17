import { useState, useCallback, useEffect, useRef } from "react";
import { InputBox } from "./Components/mainImport";

import useCurrencyInfo from "./Hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);// state variable for enter the input amount
  const [from, setFrom] = useState("usd"); // statevariable for passing value for  from label currency feild dropdown 
  const [to, setTo] = useState("inr");  //statevariable for passing value for  to label currency feild dropdown 
  const [convertedvalue, setconvertedvalue] = useState(0);//state variable for accepting the converted  amount

  const [convertamountfeild, setconvertAmountfeild] = useState(true);//state variable for status of converted amount feild 
  const [currencyfeild,setCurrencyFeild]=useState(false)// state variable for status of currency  feild 
  const [inputamountfeild,setinputAmountfeild]=useState(false)//state variable for status of input amount feild 
  
  const mycomponentref = useRef(); // this is the ref variable for parent component mount in the child component i.e <inputBox/>

  

// this is the function that invoke through use effect when converted value feild is changed it sets the logic for setting up the convertamount feild 
  const handelconvertfeildamount = useCallback(() => {

   setconvertAmountfeild(convertedvalue===0)
  }, [convertedvalue])


  // this is the function that invoked through use effect when from and to feild is changed through the dropdown and sets the logic for setting up the setcurrency feild
  const handelSelectFeildcurrency=useCallback(()=>{
     setCurrencyFeild(true)
    },[from ,to]
  )
   
  //this is the function invoked through use effect when amount feild is changed that sets up the logic for the setinputAmountfeild
const handelinputFeild=useCallback(()=>{
    setinputAmountfeild(true)
},[amount])

// here we use/access the child component attribute and function
//   through mycomponentref.current  in this scenerio we wont use any methodology 

  useEffect(
    () => {
      handelconvertfeildamount();
      
    },
   [ convertedvalue,handelconvertfeildamount,amount]
  )

  useEffect(
    () => {
      handelSelectFeildcurrency();
      
    },
   [ from,to,handelSelectFeildcurrency]
  )

  useEffect(()=>{
    handelinputFeild()
},[amount,handelinputFeild])




 
//this is the custom hook that draw the api response to currencyinfo 
  const currencyInfo = useCurrencyInfo(from);
  //console.log(currencyInfo)

  const Options = Object?.keys(currencyInfo);
  //console.log(Options)

  
  // swap function for interchanging the values 
  const Swap = () => {
    setFrom(to);
    setTo(from);
    setconvertedvalue(amount);
    setAmount(convertedvalue);
  };

 
 
 // converter function that responds when the button is clicked .
  const convertor = () => {
    setconvertedvalue(amount * currencyInfo[to]);
    setCurrencyFeild(false)
    setinputAmountfeild(false)
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convertor();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  CurrencyOption={Options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                  //ref={mycomponentref}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={Swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedvalue}
                  CurrencyOption={Options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
              //    ref={mycomponentref}
                />
              </div>


          { /*  conditional rendering based on the condition met from the three attributes  */}

              {convertamountfeild|| currencyfeild|| inputamountfeild? (
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              ) : (
                <h3 className="text-center text-lg ">Value Converted</h3>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
