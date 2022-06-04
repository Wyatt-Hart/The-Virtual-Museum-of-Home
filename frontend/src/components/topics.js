import Def from './default'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
const React = require('react')

export default function Topics () {
    let { id } = useParams()
    const [topic, setTopic ] = useState({})
    useEffect(() => {
        push(`/topics/${id}`)
            .then((res) => res.json())
            .then((topic) => setTopic(topic))
    })

   return (
       <Def>
           <main className='topics-view'>

               <h1>Claim your exhibit topics</h1>

                    <p>
                       Please choose your exhibit topic at least two weeks before it's due. After that, for each day that you fail to claim a topic five points will be deducted from your exhibit grade. If another student has already claimed a topic then you must choose something else.
                    </p>

               <div>
                   
                   {/*topics sheet here*/}

                    <Link to={`/users/${id}/submit`}>
                        <button>Submit</button>    
                    </Link>

                    <Link to={`/users/${id}/submit`}>
                        <button>Submit</button>    
                    </Link>

                    <Link to={`/users/${id}/submit`}>
                        <button>Submit</button>    
                    </Link>

                    <Link to={`/users/${id}/submit`}>
                        <button>Submit</button>    
                    </Link>

                </div>
               
           </main>
       </Def>
   )
}