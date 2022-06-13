import { useNavigate } from 'react-router-dom'
import Def from './default'
const React = require('react')

export default function NewForm () {
  let navigate = useNavigate()
  const userID = localStorage.getItem('token')
  const handleSubmit = (e)=>{
    e.preventDefault()
    attemptSubmit(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[6].value, e.target[7].value, e.target[4].value, e.target[5].value)
  }
{/*
  var loadingImage = loadImage(
    'https://example.org/image.png',
    function (img) {
      document.body.appendChild(img)
    },
    { maxWidth: 600 }
  )
*/}

const attemptSubmit = async(name, tags, regions, timePeriod, description, sources, images, videos) => {
  let response = await fetch('/api/exhibits',
      {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: name, tags: tags, regions: regions, timePeriod: timePeriod, description: description, sources: sources, images: images, videos: videos, authorId: userID})
      }    
  )

    const result = await response.json();

    if(result && Object.keys(result).length > 0) {

        navigate("/")


    } else {
        console.log("Submission Error")
    }
    
  }
    return (
      <Def>
        <div className="exhibit-new">
          
          <h1 className="title-sub">Please submit your exhibit data below</h1>
            
          <form onSubmit={handleSubmit} method='POST' action="/api/exhibits" style={{width: '60vw', margin: 'auto'}}>

            <div className="upload-rows">

              <div className="submission-container">
                <label className="submission-label" htmlFor="name">Exhibit Title</label>

                <input className="form-control" id="name" name="name" placeholder='What is your topic?' required />
              
              </div>

              <div className="submission-container">
                <label className="submission-label" htmlFor="tags">Tags</label>

                <input className="form-control" id="tags" name="tags" placeholder='What keywords will lead viewers to this exhibit?' required />

              </div>

              <div className="submission-container">
                <label className="submission-label" htmlFor="regions">Region</label>

                <input className="form-control" id="regions" name="regions" placeholder='What region(s) does this exhibit represent?' required />
              </div>

              <div className="submission-container">
                <label className="submission-label" htmlFor="timePeriod">Time Period</label>

                <input className="form-control" id="timePeriod" name="timePeriod" placeholder='What time period does this exhibit represent?' required />
              </div>
        
              <div className="submission-container">
                <label className="submission-label" htmlFor="images">Profile Image</label>

                <input className="form-control" type="url" id="images" name="images" placeholder='Upload your Exhibit Profile image here' required />     
              </div>

              <div className="submission-container">
                <label className="submission-label" htmlFor="videos">Videos</label>

                <input className="form-control" id="videos" name="videos" placeholder='Upload your exhibit videos here' required />
              </div>
            </div>

            <div>
              <div className="submission-container">
                <label className="submission-label" htmlFor="description">Description</label>

                <textarea className="description-form-control" id="description" name="description" placeholder='Write your Exhibit Description here:'required />
              </div>

              <div className="submission-container">
                <label className="submission-label" htmlFor="sources">Sources</label>

                <input className="form-control" id="sources" name="sources" placeholder='Where did this information come from?' required />
              </div>
            
            </div>
            
            <button type="submit" className="new-exhibit-button" >Submit Exhibit</button>  
          
          </form>

        </div>
      </Def>
    )
}