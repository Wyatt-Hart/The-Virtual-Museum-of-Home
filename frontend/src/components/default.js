import { Link } from 'react-router-dom'
import './components.css';
const React = require('react')


export default function Def(html) {
    return (
            <>
            <h1 className='title'>The Virtual Museum of Home</h1>
                <nav className='navbar'>
                    <ul>
                        <li className='navlink'>
                            <Link to="/">Museum</Link>
                        </li>
                        <li>
                            <Link to="/Assignments">Assignments</Link>
                        </li>
                        <li>
                            <Link to="/Exhibit-New">Create Your Exhibits</Link>
                        </li>
                        <li>
                            <Link to="/topics/new">Create Exhibit</Link>
                        </li>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        {/* This last link won't be on the navbar. We need to make a profile tab for this page.}
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                    </ul>

                </nav>
                {html.children}
            </>
    )
}