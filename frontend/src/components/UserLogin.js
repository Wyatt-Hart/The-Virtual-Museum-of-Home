import { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './UserLogin.css'
import { UserContext } from "../contexts/UserContext";

function App() {

    const navigate = useNavigate();
    
    const [username, setUsername] =useState('')
    const [password, setPassword] =useState('')
    
    const { setUser } = useContext(UserContext)

    const [ loginMessage, setLoginMessage ] = useState()

    // login
    const onLogin = e => {
        e.preventDefault()

        attemptLogin(username, password)
        
    }

    // contact api to login
    const attemptLogin = async(username, password) => {
        const url = '/api/users/login'
        let response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: username, password: password})
            }    
        )

        const result = await response.json();

        if(result.success) {
            
            setUser(result.data)

            localStorage.setItem('token', result.data.token)

            navigate("/")


        } else {

            setLoginMessage ("Invalid User Name or Password")
        }
        
    }
  
    return (
    
            <div className="login-container" >
                <h2 className="Heading2">Login</h2>
                
                <p id="loginMessage">
                    { loginMessage }
                </p>
                
                <form className="form" onSubmit={ onLogin }>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Username"
                        required
                    />
                    <br />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        required
                    />
                   
                
                    <input type="submit" value="Login" />
                    
                </form>
            </div>
     
    )
  }
  
  
  export default App;