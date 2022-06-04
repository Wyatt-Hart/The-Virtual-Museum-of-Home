import Def from './Default'
import Topic from './Topics'
const React = require('react')

export default function Users () {
   return (
       <Def>
           <main className='user-view'>
               <h1>Name</h1>
                   <div>    
                    <ul>
                        <li>
                            <h2>Your {topic1.title} is due on {duedate}</h2>
                        </li>
                        <li>
                            <h2>Your {topic2.title} is due on {duedate}</h2>
                        </li>
                        <li>
                            <h2>Your {topic3.title} is due on {duedate}</h2>
                        </li>
                        <li>
                            <h2>Your {topic4.title} is due on {duedate}</h2>
                        </li>
                        <li>
                            <Link to="/Topics">Topics Sign-Up Sheet</Link>
                        </li>
                    </ul>
                   </div>
           </main>
       </Def>
   )
}