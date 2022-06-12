import { Link } from 'react-router-dom';
import './components.css';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import  { UserContext } from "../contexts/UserContext";
import User from './User';
const React = require('react')


export default function Def(html) {

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext)
    
    useEffect(() => {

        if(!user) {

            navigate('/login')
        }

    },[user, navigate])
    
    const userLogout = () => {

        setUser(null)

    }

    const profilePage = () => {


        if(user != undefined && parseInt(user.profileCode) === 10) {

            
            console.log(user.profileCode)

            return ('/admin')
        } else {
            return ('/user')
        }
    }

    return (
            <>
            <div className="titlebar">
                <header className='title-main'>
                    <h1>The Virtual Museum of Home</h1>
                </header>
                <Link to={ profilePage() }>
                    <button className="profile">Profile</button>
                </Link>
                
            </div>

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
              </ul>
            </nav>
            {html.children}
            </>
    )
}
