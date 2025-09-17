// useRef hook - it lets you reference a value that's not needed for rendering
import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom/client';

function App(){
    const [count,setCount]=useState(0); // state variable
    let  money=useRef(0); // normal variable


    return(
        <>
        <h1>Counter is: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>

        <h1>Money is: {money.current}</h1>
        <button onClick={()=>{money.current=money.current+1
            console.log(money.current);
        }}>Increment</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

/* <h1>Counter is: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>

        <h1>Money is: {money}</h1>
        <button onClick={()=>{money=money+1
            console.log(money);
        }}>Increment</button> */
        // if we use this the count increases and is shown in ui but the money increase but not shown in ui for it state variable needs to be used 
        // now if we increase money uptoan extent and the increase count the page rerenders then due to it money again starts at the initial point
        // now i want to store the money value to sustain it for having same value in renders we use - useref hook

        // useref hook gives us an object and the value is putten inside the current key so for accessing it money.current
        // useref hook doesnt re-render the function but sustain the previous value but state re-renders the function so when we click that state button the value of ref is also fetched