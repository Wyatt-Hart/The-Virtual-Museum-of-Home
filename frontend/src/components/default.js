import { Link } from 'react-router-dom'
const React = require('react')


export default function Def(html) {
    return (
            <>
                <nav>
                    <h1>The Virtul Museum of Home</h1>
                    <ul>
                        <li>
                            <Link to="/">Museum</Link>
                        </li>
                        <li>
                            <Link to="/users">Curators</Link>
                        </li>
                        <li>
                            <Link to="/topics">Sign Up for Exhibits</Link>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </>
    )
}