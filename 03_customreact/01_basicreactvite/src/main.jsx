import React from 'react';
import ReactDOM from 'react-dom/client';

// Uncommented import of App if needed in future
// import App from './App.jsx';

// Inline component definition example
// function MyApp() {
//     return (
//         <div>
//             <h1>custom app</h1>
//         </div>
//     );
// }




// JSX Syntax :
const AnotherElement = (
    <a href="https://google.com" target="_blank">Visit google</a>
);



// Correct usage of React.createElement to match the JSX structure
const ReactElement = React.createElement(
    //tag
    //object
    //direct text
    //another variables used injection
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Visit google'
);


// seeing another made variables used injection
const pg="chaissss"
const ReactElementsecond = React.createElement(
    //tag
    //object
    //direct text
    //another variables used injection
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Visit google',
    pg
);



ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp /> // this basically means MyApp()
    // MyApp() can also run in this way but for convention don't do
    // <ReactElement /> also why it's not working because actually it's ReactElement() and we have it as an object so we can't call 
    // element this way but ReactElement this way then also it will not run because react has a definite render pattern 

    <div>
    {AnotherElement},
    {ReactElement} {/* now this will work because AnotherElement object is according to the definite pattern of React */}
    {ReactElementsecond}
    </div>
);
