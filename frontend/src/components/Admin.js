import { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Def from './default'
import './Admin.css'
import { UserContext } from "../contexts/UserContext";
import SignUp from "./SignUp"

function App () {

    const navigate = useNavigate();
    
    
    
    const { user } = useContext(UserContext)


    return (
        <Def>
            <div id='admin-main'>
                <div id='create-user-com'>
                    <SignUp />
                </div>
            </div>
        </Def>
    )
}

export default App;