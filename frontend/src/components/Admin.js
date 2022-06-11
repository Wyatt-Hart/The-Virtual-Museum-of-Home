import { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Def from './default'
import './Admin.css'
import { UserContext } from "../contexts/UserContext";
import SignUp from "./SignUp"

function App () {

    const navigate = useNavigate();

    const [action, setAction ] = useState('')
    
    
    
    const { user } = useContext(UserContext)
    
    const adminAction = () => {

        if(action === 'createUser') {
            return (
                <SignUp />
            )
        } else {
            return (<div>Bad Accident</div>)
        }
    }

    return (
        <Def>
            <div id='admin-main'>

                <div className='admin-function'>
                    <div className='function-btn' >Create User</div>
                    <div className='function-btn'>Reset Password</div>
                    <div className='function-btn'>User Lists</div>
                </div>
                <div id='create-user-com'>
                <SignUp />
                </div>
            </div>
        </Def>
    )
}

export default App;