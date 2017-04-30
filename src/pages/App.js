import React from 'react';
import {Link} from 'react-router';

const Home = ({children}) => {
    return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div>
            {children}
        </div>
    </div>
)}

export default Home;
