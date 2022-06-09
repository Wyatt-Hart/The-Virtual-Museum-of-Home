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
                            <Link to="/users">Curators</Link>
                        </li>
                        <li>
                            <Link to="/topics">Sign Up for Exhibits</Link>
                        </li>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                    </ul>

                </nav>
                {html.children}
            </>
    )
}