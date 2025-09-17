// use memo hook - lets you cache result of calculation between re-renders
// 1 counter button : increase
// 2 input: fibonacci number
// 0 1 1 2 3 5 8
// recursive code 2^n time complexity very high

import React, {useState, useMemo} from 'react';
import ReactDOM from 'react-dom/client';


function App(){
    const [count,setCount]=useState(0);  //counter
    const [number,setNumber] = useState("");


    function Fibonacci(n){
        if(n<=1)
            return n;

        return Fibonacci(n-1)+Fibonacci(n-2);
    }

    // const result=Fibonacci(number);
    const result=useMemo(()=>Fibonacci(number),[number]);// calculate only when number value is changed , if same number display previous value
    return(
        <>
        <h1>Counter is:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <div>
            <h2>Fibonacci number is:{result}</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

// useeffect runs at end and due to it the result is shown at end and 1 render is used more
// usememo saves that 1 render cycle- save calculations
// usecallback - function is not created every time or you can also make the function global

// const Fibo=useCallback((n)=>{
    // function code},[]) empty dependency array for not creating every time