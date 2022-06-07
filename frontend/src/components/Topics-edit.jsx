import Def from '../default'
const React = require('react')

function New () {
    return (
      <div className="topics-new">
        
        <form method='POST' action={`/topics/${data.topic.id}?_method=PUT`}>
          <div className="row">
            <div className="form-group col-sm-6">
                        <label htmlFor="name">Topic 1</label>
                        <input className="form-control" id="name" name="name" value={data.topic1.name} required />
            </div>
            <div className="form-group col-sm-6">
                        <label htmlFor="name">Topic 2</label>
                        <input className="form-control" id="name" name="name" value={data.topic2.name} required />
            </div>
            <div className="form-group col-sm-6">
                        <label htmlFor="name">Topic 3</label>
                        <input className="form-control" id="name" name="name" value={data.topic3.name} required />
            </div>
            <div className="form-group col-sm-6">
                        <label htmlFor="name">Topic 4</label>
                        <input className="form-control" id="name" name="name" value={data.topic4.name} required />
            </div>
          
          </div>
          
          <input type="submit" className="btn btn-primary" value="Submit Topic" />  
        </form>

      </div>
    )
}

module.exports = New
