import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Def from './default'
import './SignUp.css'
const React = require('react')

export default function Signin() {

    let navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [profileCode, setProfileCode] =  useState(0)
    const [allowPasswordChange, setAllowPasswordChange] = useState(false)

    const onSignUp = (e)=>{
        e.preventDefault()
        
        attempUserSignUp(email, username, password, firstName, lastName, allowPasswordChange, profileCode)
    }

    const attempUserSignUp = async(email, username, password, firstName, lastName, allowPasswordChange, profileCode) => {
        const url = '/api/users/createUser'
        
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password,
                profileCode: profileCode,
                allowPasswordChange: allowPasswordChange
            })
        })

        const result = await response.json();

        if(result.success) {

            alert(result.message)
            setEmail('')
            setUsername('')
            setPassword('')
            setFirstName('')
            setLastName('')
            setProfileCode(0)
            setAllowPasswordChange(false)


        } else {
            alert(result.message)
            
        }
        
    }

    return(
        
            <div id='new-user-signup'>
                <div className='signup-container'>
                    <h2>Create New User:</h2>
                    <form className="form" onSubmit={ onSignUp }>
                        <div className='flex'>
                            <label>Email</label>
                            <input 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div className='flex'>
                            <label>Username</label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                placeholder="Username (first name.last name)"
                                required
                            />
                        </div>

                        <div className='flex'>
                            <label>First Name</label>
                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                placeholder="First Name"
                                required
                            />
                        </div>

                        <div className='flex'>
                            <label>Last Name</label>
                            <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                placeholder="Last Name"
                                required
                            />
                        </div>

                        <div className='flex'>
                            <label>Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="text"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className='flex'>
                            <label>Profile Code</label>
                            <input
                                value={profileCode}
                                onChange={(e) => setProfileCode(e.target.value)}
                                type="number"
                                placeholder="0"
                                required
                            />
                        </div>
                        <div className='flex'>
                            <label>Allowed Password Change
                                <input
                                    value={allowPasswordChange}
                                    onChange={(e) => setAllowPasswordChange(e.target.value)}
                                    type="checkbox"
                                    id="allowPasswordChange"
                                    
                                />
                            </label>
                            
                        </div>

                        <button type='Submit'>Create User</button>

                    </form>
                </div>
            </div>
    )
}