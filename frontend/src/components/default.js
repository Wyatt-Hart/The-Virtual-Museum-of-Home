import { Link } from 'react-router-dom';
import './components.css';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import  { UserContext } from "../contexts/UserContext";
const React = require('react')


export default function Def(html) {

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext)
    /*
    useEffect(() => {

        if(!user) {

            navigate('/')
        }

    },[user, navigate])
    */
    const userLogout = () => {

        setUser(null)

    }

    const loginLogout = () => {
        
        if(!user) {

            return ( <Link to="/Login">Login</Link> )

        } else {

            return (<Link to="/Login" onClick={userLogout}>Logout</Link>)
        }

    }

    const adminPage = () => {


        if(user != undefined && parseInt(user.profileCode) === 10) {

            
            console.log(user.profileCode)

            return (

                <li>
                    <Link to="/Admin">Admin</Link>
                </li>
                
            )
        }
    }

    return (
            <>
            <h1 className='title'>The Virtual Museum of Home</h1>
                <nav className='navbar'>
                    <ul>
                        <li className='navlink'>
                            <Link to="/">Museum</Link>
                        </li>
      
                        <li className='navlink'>
                            <Link to="/assignments">Assignments</Link>
                        </li>
                        <li>
                            <Link to="/topics/new">Create an Exhibit</Link>
                        </li>
                        {/* This exhibit link won't be on the website. I've just made it for now so I can see what an individual exhibit page will look like as I build it. Each exhibit page will be linked to it's corresponding image on the homepage*/}
                        <li className='navlink'>
                            <Link to="/exhibit">Exhibit</Link>
                        </li>
                        <li>
                            { loginLogout() }
                            {/*>>>>>>> 40a6cc2440e98cd9e2128c7737f6c2490af71c48*/}
                        </li>
                        {/* This link is to be remove before production */}
                        { adminPage() }
                    </ul>

                </nav>
                {html.children}
            </>
    )
}
