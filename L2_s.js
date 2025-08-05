const ele=React.createElement("h1",{id:"first", className:"Hii", style:{backgroundColor: "yellow", color:"red", fontSize:"30px"}},"Hii new world");
const ele2=React.createElement("h2",{id:"second", className:"Hey", style:{backgroundColor: "blue", color:"white", fontSize:"20px"}},"Let's begin our new journey");

const div1=React.createElement("div",{},[ele, ele2]);
// render khta h ki jitna bhi previous data h usko replace karke naya data render hota h toh iss vjh se phla wala render nahi hoga

// ek div ke andar daal skte hain dono elements ko
const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(div1);

