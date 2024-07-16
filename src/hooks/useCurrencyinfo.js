//custom hooks
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    //to hold the data and update it in UI, we are using a built in hook
    const [data, setData] = useState({})
    useEffect(() => {
        //mostly the value we get from api are in string format. so, we have to first convert it into string.

        //api call - fetch
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        //we get a call back in .then
        //we convert the response in the json format by .json
        .then((res) => res.json())
        .then((res) => setData(res.currency))
        console.log(data);
        //in dependency array we want to run the function, when when, our currency get changed.
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;