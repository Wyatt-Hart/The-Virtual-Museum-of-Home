import Def from '../default'
const React = require('react')
import {getUserProfile} from './user'
import {useState} from 'react'
import New from 'Topics-edit'

const submittedTopic1 = () => {
    return (
      <h2>${New.topic1.name}</h2>
    )
  }

const submittedTopic2 = () => {
    return (
      <h2>${New.topic2.name}</h2>
    )
  }

const submittedTopic3 = () => {
    return (
      <h2>${New.topic3.name}</h2>
    )
  }

const submittedTopic4 = () => {
    return (
      <h2>${New.topic4.name}</h2>
    )
  }  
export default function User ({user, index}) {
    return (
        <Def>
          <main>
            <h1>${data.user.name}</h1>  

            <h2>Your Exhibit Topics:</h2>

            <div className='topics-container'>
                <h2>submittedTopic1</h2>
                <h2>submittedTopic2</h2>
                <h2>submittedTopic3</h2>
                <h2>submittedTopic4</h2>
            </div>
          </main>
        </Def>
    )
}

//Maybe this is a better way. Erase the variables above and use this code in the div:
//<Link to={`/topics/${!data ? 'error':data[topic1]._id}`}>
//   <p className='topic-name'>{!data ? 'Topic 1' : data[topic1].title}</p>
//</Link>    
//<Link to={`/topics/${!data ? 'error':data[topic2]._id}`}>
//   <p className='topic-name'>{!data ? 'Topic 2' : data[topic2].title}</p>
//</Link>
//<Link to={`/topics/${!data ? 'error':data[topic3]._id}`}>
//   <p className='topic-name'>{!data ? 'Topic 1' : data[topic3].title}</p>
//</Link>
//<Link to={`/topics/${!data ? 'error':data[topic4]._id}`}>
//   <p className='topic-name'>{!data ? 'Topic 1' : data[topic4].title}</p>
//</Link>