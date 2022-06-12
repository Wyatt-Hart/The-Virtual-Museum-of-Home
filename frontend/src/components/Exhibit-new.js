import { useNavigate } from 'react-router-dom'
import Def from './default'
const React = require('react')

export default function NewForm () {
  let navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    attemptSubmit(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value, e.target[5].value, e.target[6].value, e.target[7].value)
  }
  const attemptSubmit = async(name, tags, regions, timePeriod, description, sources, images, videos) => {
    let response = await fetch('/api/exhibits',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, tags: tags, regions: regions, timePeriod: timePeriod, description: description, sources: sources, images: images, videos: videos})
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
        <div style={{width: '80vw', margin: 'auto', textAlign: 'center'}}>
          
          <h1 className="title-sub">Please submit your exhibit data below</h1>

          <div className="exhibit-new">
            
            <form onSubmit={handleSubmit} method='POST' action="/api/exhibits" style={{width: '60vw', margin: 'auto'}}>
              <div className="row" style={{justifyContent: 'center'}}>
                <div className="form-group col-6">

                  <label htmlFor="name">Exhibit Title</label>
                  <input style={{width: '90%', margin: '1vw'}} className="form-control" id="name" name="name" placeholder='Title of exhibit: What is your topic?' required />
                </div>

                <div className="form-group col-6">
                  <label htmlFor="regions">{`Region(s)`}</label>
                  <input style={{width: '90%', margin: '1vw'}} className="form-control" id="regions" name="regions" placeholder='Region: What region(s) does this exhibit represent?' required />
                </div>

                <div className="form-group col-6">
                  <label htmlFor="timePeriod">Time Period</label>
                  <input style={{width: '90%', margin: '1vw'}} className="form-control" id="timePeriod" name="timePeriod" placeholder='Time Period: What time period does this exhibit represent?' required />
                </div>

              </div>

              <div className="form-group col-md">
                  <label htmlFor="description">Description</label>
                  <textarea style={{width: '90%', height:'50vh', margin: '1vw'}} className="form-control" id="description" name="description" placeholder='Exhibit Description: Write your Exhibit Description here:'required />
              </div>

              <div className='row' style={{justifyContent: 'center'}}>
                <div className="form-group col-sm-6">
                  <label htmlFor="sources">Sources</label>
                  <input style={{width: '90%', margin: '1vw'}} className="form-control" id="sources" name="sources" placeholder='Sources: Where did the information in your description come from?' required />
                </div>

                <div className="form-group col-sm-6">
                  <label htmlFor="tags">Tags</label>
                  <input style={{width: '90%', margin: '1vw'}} className="form-control" id="tags" name="tags" required />
                </div>

                <div className="form-group col-sm-6">
                  <label htmlFor="images">Images</label>
                  <input style={{width: '90%', margin: '1vw'}} className="form-control" id="images" name="images" required />
                </div>

                <div className="form-group col-sm-6">
                  <label htmlFor="videos">Videos</label>
                  <input style={{width: '90%', margin: '1vw'}} className="form-control" id="videos" name="videos" required />
                </div>
              
              </div>
              
              <button type="submit" className="btn btn-primary" >Submit Topic</button>  
            </form>

          </div>

        </div>
      </Def>
    )
}