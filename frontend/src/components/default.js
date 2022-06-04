import { Link } from 'react-router-dom'
const React = require('react')


export default function Def(html) {
    return (
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/users">Topics</Link>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </>
    )
}