const ele=React.createElement('h1',{},"Hello new react");
// const root = document.getElementById('root');

// ReactDOM.render(ele, root);
// this is workable until react 17 FOR react 18 we use ReactDOM.createRoot



// while a button info is loaded till the time we cannot click any other button it was till react 17
const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
// react root container 
Reactroot.render(ele);

//cdn - content delivery network

// where is data stored - server
// single server can't handle multiple requests
// from Usa it will take time to load data from server when requested from India
// so we have multiple servers in different locations (copy of original data)
// so when we request data from India it will be served from one of the servers in India
// when uploading data it goes to the original server and it updates the other servers

//more improved later
// made small small servers
// so it will go to nearby server and it will be faster and if it do not have the data it will go to the original server
// cdn is a network of servers that are distributed across the world to deliver content to users more quickly and efficiently.
// it is used to deliver static content like images, videos, and scripts.
// if a server has so many requests or is down it will not affect the user experience as the content will be served from another server.

// cdn network - cloudflare

// when loading a website the content is loaded faster but images and videos take time to load
// static content is cached on the CDN servers ( data which do not change frequently) 
// dynamic content is not cached on the CDN servers (data which changes frequently) eg: comments, likes, etc.
