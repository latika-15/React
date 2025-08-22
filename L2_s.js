const ele=React.createElement("h1",{id:"first", className:"Hii", style:{backgroundColor: "yellow", color:"red", fontSize:"30px"}},"Hii new world");
const ele2=React.createElement("h2",{id:"second", className:"Hey", style:{backgroundColor: "blue", color:"white", fontSize:"20px"}},"Let's begin our new journey");


// want multiple childs put in the array
// theree are multiple property make objects for it

const div1=React.createElement("div",{},[ele, ele2]);
// render khta h ki jitna bhi previous data h usko replace karke naya data render hota h toh iss vjh se phla wala render nahi hoga

// ek div ke andar daal skte hain dono elements ko
const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(div1);



// this html functionality has been brought to reacy  by using JSX
// JSX is a syntax extension for JavaScript that looks similar to XML or HTML. (It allows you to write HTML-like code within your JavaScript files, making it easier to create and manage UI components in React applications. JSX is not required to use React, but it is commonly used because it makes the code more readable and expressive. When using JSX, you can write elements like this:) JSX- JavaScript XML
// it will be converted to React.createElement() function calls under the hood, which is what React uses to create elements.
// <div> </div>


// is it a production ready code which is can it be deployed on a server?
// No, this is just a basic example of how to create and render React elements. In a production-ready React application, you would typically use a build tool like Webpack or Create React App to bundle your code, manage dependencies, and optimize performance. Additionally, you would likely use components, state management, and other features of React to build a more complex and interactive user interface.

// using bundler parcel
// initialize packet : npm init
// package name - give accordingly
// version
// description

// entry point - our js file
// author
// it will craete a package.json file
// then install parcel : npm install parcel --save-dev



// npm  is a database of open source packages