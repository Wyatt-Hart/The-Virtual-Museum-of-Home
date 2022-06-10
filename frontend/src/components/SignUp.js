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

        if(response.success) {
            console.log(response.data)
        } else {
            console.log(response.message)
        }
        
    }

    return(
        <Def>
            <div id='new-user-signup'>
                <div className='signup-container'>
                    <h2>Sign-up</h2>
                    <form className="form" onSubmit={ onSignUp }>
                        <div className='signup-field'>
                            <label style={{padding:'1rem'}}>Email</label>
                            <input 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div>
                            <label style={{padding:'1rem'}}>Username</label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                placeholder="fname.lname"
                                required
                            />
                        </div>

                        <div>
                            <label style={{padding:'1rem'}}>First Name</label>
                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div>
                            <label style={{padding:'1rem'}}>Last Name</label>
                            <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div>
                            <label style={{padding:'1rem'}}>Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div>
                            <label style={{padding:'1rem'}}>Profile Code</label>
                            <input
                                value={profileCode}
                                onChange={(e) => setProfileCode(e.target.value)}
                                type="number"
                                placeholder="0"
                                required
                            />
                        </div>
                        <div>
                            <input
                                value={allowPasswordChange}
                                onChange={(e) => setAllowPasswordChange(e.target.value)}
                                type="checkbox"
                                id="allowPasswordChange"
                                placeholder="Password"
                            />
                            <label for="allowPasswordChange" >Allowed Password Change</label>
                            
                        </div>

                        <button type='Submit'>Sign-up</button>

                    </form>
                </div>
            </div>
        </Def>
    )
}