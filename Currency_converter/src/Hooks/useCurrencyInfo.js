import { useEffect, useState } from "react";

// this is the custom hook that make the api call and it is imported in App.jsx
const useCurrencyInfo = (currency) => {
  //  console.log(`currency passed ${currency}`)
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.9.1/v1/currencies/${currency}.json`)
            .then((res1) => res1.json())
            .then((res2) => setData(res2[currency]))
          
    }, [currency])

    console.log(data)
    return data

}
export default useCurrencyInfo