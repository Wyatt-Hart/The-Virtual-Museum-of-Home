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

    // Profile
    const [email, setEmail] = useState('')

    const [name, setName] = useState('')

    useEffect( () => {
        setEmail(user.email)
        setName(user.name)
    },[])



    const userLogout = () => {

        setUser(null)

        navigate('/login')

    }

    const updateUserInformation = async (e) => {

        e.preventDefault()

        const url = '/api/users/updateUserInfo'

        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                email: email,
                name: name
            })
        })

        const result = await response.json();

        if(result.success) {

            alert(result.message)

        } else {

            alert(result.message)
            
        }

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
                        <div className='flex'>
                            <label htmlFor='currentPassword'>Current Password:</label>
                            <input 
                                id='currentPassword' 
                                value={ currentPassword} 
                                onChange={ (e) => setCurrentPassword(e.target.value) } 
                                type='text'
                                placeholder='Current Password'
                            />
                        </div>
                        <div className='flex'>
                            <label htmlFor='newPassword'>New Password:</label>
                            <input 
                                id='newPassword' 
                                value={ newPassword } 
                                onChange={ (e) => setNewPassword(e.target.value) } 
                                type='text'
                                placeholder='New Password'
                            />
                        </div>
                        <div className='flex'>
                            <label htmlFor='confirmPassword'>Confirm Password:</label>
                            <input 
                                id='confirmPassord' 
                                value={ confirmPassord } 
                                onChange={ (e) => setComfirmPassword(e.target.value)} 
                                type='text'
                                placeholder='Confirmed Password'
                            />
                        </div>
                        <button type='Submit'>Change My Password</button>
                    </form>
                </span>
            )
        } else {
            <span id='password-reset-container'>
                <h4>Password Change:</h4>
                <p>Password change is currently unavailable for you account.</p>
            </span>
        }
    }
 
    const profileUpdate = () => {

        

        if(user && user.allowPasswordReset) {
            return (
                <span id='profile-update-container'>
                    <h4>Update Profile:</h4>
                    <form onSubmit={ updateUserInformation  }>
                        <div className='flex'>
                            <label htmlFor='email'>Email:</label>
                            <input 
                                
                                value={ email} 
                                onChange={ (e) => setEmail(e.target.value) } 
                                type='text'
                                placeholder='name@emailprovider.com'
                            />
                        </div>
                        <div className='flex'>
                            <label htmlFor='name'>Name:</label>
                            <input 
                                
                                value={ name } 
                                onChange={ (e) => setName(e.target.value) } 
                                type='text'
                                placeholder='First name Last name'
                            />
                        </div>
                    
                        <button type='Submit'>Update My Information</button>
                    </form>
                </span>
            )
        } 
    }
    

    return (
        <Def>
            <div id='user-main'>
                <span className='flex'>
                    <h2>{ name }</h2>
                    <button id='logout-btn'>
                        <Link to="/Login" onClick={userLogout}>Logout</Link>
                    </button>
                </span>
                
                <div id='user-function'>
                     
                    { passwordReset() }

                    { profileUpdate() }
                </div>
              
            </div>
        </Def>
    )
}

export default User;