import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom/client';


// the settime also has a callback function which can be take as any name - on the same function
// setinterval settime ko har 1 sec ke baad call krega
function Stopwatch(){
    const [time,setTime]=useState(0);
    const [isRunning, setisRunning] =useState(false); // if already an interval is running you cannot start another inteerval if it is not handled then the waatch updates in a much fatser way
    const intervalRef=useRef(null);
    
    function start(){
        if(!isRunning){
        intervalRef.current=setInterval(()=>{
            setTime(prevtime=>prevtime+1);
        },1000)
        setisRunning(true);
    }
    }
    function stop(){ 
        if(isRunning){
        // clearInterval(abc);
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setisRunning(false);
        }
    }
    function reset(){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setTime(0);
    }



    return(
        <>
        <h1>Stopwatch is: {time}</h1>
        <button onClick={()=>start()}>Start</button>
        <br></br>
        <br></br>
        <button onClick={stop}>Stop</button>
        <br></br>
        <br></br>
        <button onClick={reset}>Reset</button>
    
        </>
    )
}
 // given callback of function of stop , reset

ReactDOM.createRoot(document.getElementById('root')).render(<Stopwatch/>);