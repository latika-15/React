
import {useState, useEffect} from 'react';
function Body(){
    const [Profile, setProfile] =useState([]);
    const [numofProfile, setnnumofProfile] =useState("");

    async function generateProfile(count){
        const ran=Math.floor(1+Math.random()*10000);
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        // jab tak saari information na aajaye tab tak wait kro - await (used with only async functions)
        const data=await response.json();
        // jo bhi response aaya h usko json mai convert karna parta h aur usme bhi time lgta hai

        setProfile(data);
    }

    useEffect(()=>{
        generateProfile(10);
    },[]) // put in empty array takin function sirf ek hi baar call ho

    // map use karenge jo ek ek karkr value ko nikalega
    // we have to give the key of child component
    // traget=_blank opens it in new page
    return(
        <div className="but">
            <input type="text" className="inpu" placeholder="search here" value={numofProfile} onChange={(e)=>setnnumofProfile(e.target.value)}></input>
            <button onClick={()=>generateProfile(Number(numofProfile))}>Search no. of profile</button>
        <div className="profiles">
            
        {
            Profile.map((value)=>{
                return(<div key={value.id} className="cards">
                    <img src={value.avatar_url}></img>
                    <h2>{value.login}</h2>
                    <a href={value.html_url} target="_blank">Profile</a>
                </div>)
            })
        }
        </div>
        </div>
    )
}

export default  Body;


// apis
// https://api.github.com/users?per_page=${count} - no.of profile view
// https://api.github.com/users/taylorotwell - for one person
// https://api.github.com/users?since=6000&per_page=20 - make random according to id take for since

// try catch functionality
// use callback function 
// search button : name ke basis  : user profile exist or not