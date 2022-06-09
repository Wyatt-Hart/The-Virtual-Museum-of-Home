import Def from './default'
const React = require('react')

export default function NewForm () {
  let data = {topic: {id: 3}}
    return (
      <Def>
        <div style={{width: '80vw', margin: 'auto', textAlign: 'center'}}>
          <h1>Please select and submit your topics</h1>
          <div className="topics-new">
            
            <form method='POST' action={`/topics/${data.topic.id}?_method=PUT`} style={{width: '60vw', margin: 'auto'}}>
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
      </Def>
    )
}