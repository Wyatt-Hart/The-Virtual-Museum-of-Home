import { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Def from './default'
import './Admin.css'
import { UserContext } from "../contexts/UserContext";
import SignUp from "./SignUp"

function Admin () {
    
    const { user } = useContext(UserContext)

    const [usersList, setUserList] = useState([])

    const [ changes, setChanges ] = useState(0)

    const getUserList = async () => {
        const url = '/api/users/getUserList'

        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        const result = await response.json();

        if(result.success) {

            setUserList(result.data)

        } else {

            alert('Unable to get user list.')
        }
    }

    const passwordReset = async(user) => {
        const url = '/api/users/passwordReset'

        let response = await fetch(url, {
            method: 'POST',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },

            body: JSON.stringify({

                studentId: user._id,
                studentName: user.name

            })
        })

        const result = await response.json();

        if(result.success) {

            setChanges(changes+1)
            alert(user.name + ' new password is ' +result.data)

        } else {

            alert('Unable to get user list.')
        }

    }
    
    useEffect(() => {

        getUserList()
    }  ,[changes])

    const studentList = () => {

        if(usersList) {
            return (
                <div id='student-list'>
                    <div className='flex'>
                        <h2>Student</h2>
                    </div>
                    
                    <table id='student-table'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Action</th>
                            
                            </tr>
                        </thead>
                       <tbody>
                       {usersList.map( function (user, i) {
                           
                            return (
                               <tr key={i}>
                                   <td>{ i }</td>
                                   <td>{ user.name }</td>
                                   <td>{ user.email }</td>
                                   <td>{ user.username }</td>
                                   <td>
                                       <button onClick={ () => passwordReset(user) }>Password Reset</button>
                                   </td>
                               </tr>
                            )
                       })
                    }
                       </tbody>
                    </table>
                </div>
            )
        }
    }

    return (
        <Def>
            <div id='admin-main'>
                <div id='create-user-com'>
                    <SignUp />
                    
                </div>
                { studentList() }
            </div>
        </Def>
    )
}

export default Admin;