//  basically jo input box he  uske hum reusable banayege.
//reusable input box component 


import React, { forwardRef, useImperativeHandle, useId, useRef } from "react";
// we use forward Ref in order to pass on the child function to the parent component through which it is called 
// to do so wrap the whole arrow function through forwardRef()
const InputBox = forwardRef(
  (
    {
      label,  
      amount,
      onAmountChange,
      onCurrencyChange,
      CurrencyOption = [],
      selectCurrency = "usd",
      amountDisable = false,
      currencyDisable = false,

      className = "",
    },
    ref
  ) => {
    const AmountInputId = useId();  // this is the hook for unique  identification 
    
    const amountref = useRef(null);// reference for inputfeild for amount 
    const currencyref = useRef(null);// reference for currency select feild

   /*code flow when we use the forward ref functionality .Basically this is the way we use forwardref and useImperative handel

    let currencyfeild=currencyref.current?.value

    let amountfeild= Number(amountref.current?.value);

   
    Expose the function to parent components via ref through use Imperativehandel
   
    useImperativeHandle(ref, () => {
      return {amountfeild,currencyfeild};
    });

    */
    return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
          <label
            className="text-black/40 mb-2 inline-block"
            htmlFor={AmountInputId}
          >
            {label}
          </label>
          <input
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            value={amount}
            disabled={amountDisable}
            onChange={(e) => {
              onAmountChange && onAmountChange(Number(e.target.value));
            }}
            id={AmountInputId}
            ref={amountref}
            
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            type="String"
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
            disabled={currencyDisable}
            ref={currencyref}
          >
            {CurrencyOption.map((curr) => (
              <option value={curr} key={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
);

export default InputBox;
