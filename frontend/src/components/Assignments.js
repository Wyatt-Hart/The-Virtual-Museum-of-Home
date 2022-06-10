import Def from './default'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
const React = require('react')

export default function Assignments(){
  let data = {user: {name: 'John Doe'}, topic: {id: 'test'}} //this line will need to be removed once data is actually implemented
  let componenetStyle = {width:'35vw', display:'inline-flex', flexDirection: 'column'}
  let buttonStyle = {border: 'none', background: 'none'}
  const handlePrevClick = () => {
    console.log('Previous Button Clicked')
  }
  const handleNextClick = () => {
    console.log('Next Button Clicked')
  }
  return (
    <Def>
      <div style={{ width: '80vw', margin: 'auto'}}>
        <div style={componenetStyle}>
          <h1>{data.user.name}</h1>  

          <h2>Your Exhibit Topics:</h2>

          <div className='topics-container'>
            <form method='POST' action={`/topics/${data.topic.id}?_method=PUT`} style={{width: '100%', margin: 'auto'}}>
                <div className="row">
                  <div className="form-group col-sm-6">
                              <label htmlFor="name">Topic 1</label>
                              <input style={{width: '90%', margin: '1vw'}} className="form-control" id="name" name="name" required />
                  </div>
                  <div className="form-group col-sm-6">
                              <label htmlFor="name">Topic 2</label>
                              <input style={{width: '90%', margin: '1vw'}} className="form-control" id="name" name="name" required />
                  </div>
                  <div className="form-group col-sm-6">
                              <label htmlFor="name">Topic 3</label>
                              <input style={{width: '90%', margin: '1vw'}} className="form-control" id="name" name="name" required />
                  </div>
                  <div className="form-group col-sm-6">
                              <label htmlFor="name">Topic 4</label>
                              <input style={{width: '90%', margin: '1vw'}} className="form-control" id="name" name="name" required />
                  </div>
                
                </div>
                
                <input type="submit" className="btn btn-primary" value="Submit Topic" />  
              </form>
          </div>
        </div>
        <div className="topics-show" style={componenetStyle}>
          <h2>Claim Your Exhibit Topics</h2>

          <p>
            Please choose your exhibit topic at least two weeks before it's due. After that, for each day that you fail to claim a topic five points will be deducted from your exhibit grade. If another student has already claimed a topic then you must choose something else.
          </p>
            <h2 style={{textAlign: 'center'}}><button onClick={handlePrevClick} style={buttonStyle}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
</svg></button>Week<button onClick={handleNextClick} style={buttonStyle}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg></button></h2>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{display: 'inline-flex', flexDirection: 'column'}}>
              <h2>Students</h2>
              <div>Student 1</div>
              <div>Student 2</div>
              <div>Student 3</div>
              <div>Student 4</div>
            </div>
            <div style={{display: 'inline-flex', flexDirection: 'column'}}>
              <h2>Topics</h2>
              <div>topic</div>
              <div>topic</div>
              <div>topic</div>
              <div>topic</div>
            </div>
          </div>

        </div>
      </div>
    </Def>
)}