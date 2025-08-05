// object to create elements similar to React.createElement


// const header1=document.createElement('h1');
// header1.innerText="Hello new react";
// header1.style.backgroundColor="red";
// header1.style.fontSize='30px';
// header1.style.color="white";

// const header2=document.createElement('h2');
// header2.innerText="Start learning: react";   
// header2.style.backgroundColor="yellow";
// header2.style.fontSize='20px';
// header2.style.color="red";

// const b={
// a:10
// b.a  for access

// React and ReactDOM are two different objects

// root.append(header1,header2);


//rendering -> for mainpulating the DOM  
// for append we use it


// unordered list
//HTML
//CSS
//JS

// react is a library for building user interfaces
// it is a object which have functions to create elements and render them to the DOM
// created by facebook developers in 2013
// netfkix, instagram, whatsapp, facebook, twitter, etc. are built using react

const React = {
    createElement: function(tag, style, children){
        const element = document.createElement(tag);
        if(typeof children === "object"){
            for(let value of children){
                element.append(value);
            }
        } else {
            element.innerText = children;
        }

        for(let key in style){
            element.style[key] = style[key];
        }

        return element;
    }
};

const ReactDOM = {
    render: function(element, root){
        root.append(element);
    }
};

const root = document.getElementById('root');

const header1 = React.createElement('h1', {fontSize: "30px", backgroundColor: "red", color: "white"}, 'Hello new react');
const header2 = React.createElement('h2', {fontSize: "20px", backgroundColor: "yellow", color: "red"}, 'Start learning: react');





const li1 = React.createElement('li', {}, "HTML");
const li2 = React.createElement('li', {}, "CSS");
const li3 = React.createElement('li', {}, "JS");

const UL = React.createElement('ul', {fontSize: "20px", backgroundColor: "blue", color: "white"}, [li1, li2, li3]);

ReactDOM.render(header1, root);
ReactDOM.render(header2, root);
ReactDOM.render(UL, root);
