import { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Def from './default'
import './User.css'
import { UserContext } from "../contexts/UserContext";

function User () {

    const navigate = useNavigate();
    
    const { user, setUser } = useContext(UserContext)

    const [currentPassword, setCurrentPassword] = useState('')

    const [newPassword, setNewPassword] = useState('')

    const [confirmPassord, setComfirmPassword] = useState('')

    const userLogout = () => {

        setUser(null)

    }

    const changePasswordAction = async (e) => {

        e.preventDefault()

        if(newPassword !== confirmPassord) {

            alert("New and confirm password mix-matched!")

            return;
        }

        const url = '/api/users/changePassword'

        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                currentPassword: currentPassword,
                newPassword: newPassword
            })
        })

        const result = await response.json();

        if(result.success) {

            alert(result.message)

            setCurrentPassword('')
            setNewPassword('')
            setComfirmPassword('')

        } else {

            alert(result.message)
            
        }

    }

    const passwordReset = () => {

        if(user && user.allowPasswordReset) {
            return (
                <span id='password-reset-container'>
                    <h4>Password Change:</h4>
                    <form onSubmit={ changePasswordAction  }>

                        <label htmlFor='currentPassword'>Current Password:</label>
                        <input id='currentPassword' value={ currentPassword} onChange={ (e) => setCurrentPassword(e.target.value) } type='text'/>

                        <label htmlFor='newPassword'>New Password:</label>
                        <input id='newPassword' value={ newPassword } onChange={ (e) => setNewPassword(e.target.value) } type='text'/>

                        <label htmlFor='confirmPassword'>Confirm Password:</label>
                        <input id='confirmPassord' value={ confirmPassord } onChange={ (e) => setComfirmPassword(e.target.value)} type='text'/>

                        <button type='Submit'>Change My Password</button>
                    </form>
                </span>
            )
        }
    }
    


    return (
        <Def>
            <div id='user-main'>
                <h3>{ user.name }</h3> <Link to="/Login" onClick={userLogout}>Logout</Link>
                <div id='user-function'>
                    { passwordReset() }
                </div>
              
            </div>
        </Def>
    )
}

export default User;