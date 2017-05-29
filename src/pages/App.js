import React from 'react';
import {Link} from 'react-router';

const App = ({children}) => {
    return (
    <div>
        <h1>React redux Boilerplate</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div>
            {children}
        </div>
    </div>
)}

export default App;
