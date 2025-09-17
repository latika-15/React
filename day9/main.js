import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./component/header";
import Body from "./component/body";
function GithubProfile(){
    // header
    // body : 10 cards show


    return(

        <>
        <Header/>
        <Body/>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);