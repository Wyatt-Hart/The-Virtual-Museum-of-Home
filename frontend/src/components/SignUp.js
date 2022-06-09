import { useNavigate } from 'react-router-dom'
import Def from './default'
const React = require('react')

export default function Signin() {
    let navigate = useNavigate()
    const handleSubmit = (e)=>{
        navigate('/')
    }
    return(
        <Def>
            <div style={{width:'80vw', textAlign:'right', display:'flex'}}>
                <div style={{width:'35vw', margin:'auto', display:'inline-flex', flexDirection: 'column'}}>
                    <h2>Sign-up</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label style={{padding:'1rem'}}>Email</label>
                            <input></input>
                        </div>

                        <div>
                            <label style={{padding:'1rem'}}>Username</label>
                            <input></input>
                        </div>

                        <div>
                            <label style={{padding:'1rem'}}>First Name</label>
                            <input></input>
                        </div>

                        <div>
                        <label style={{padding:'1rem'}}>Last Name</label>
                        <input></input>
                        </div>

                        <div>
                            <label style={{padding:'1rem'}}>Password</label>
                            <input></input>
                        </div>

                        <button type='Submit'>Sign-up</button>

                    </form>
                </div>
                <div style={{width:'35vw', margin:'0 auto', display:'inline-flex', flexDirection: 'column'}}>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label style={{padding:'1rem'}}>Username</label>
                            <input></input>
                        </div>

                        <div>
                            <label style={{padding:'1rem'}}>Password</label>
                            <input></input>
                        </div>

                        <button type='Submit'>Login</button>

                    </form>
                </div>
            </div>
        </Def>
    )
}