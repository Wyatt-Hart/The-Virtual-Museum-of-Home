const React = require('react')
const Def = require('../default')

function new_form (data) {
    let message = ''
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
        <Def>
          <main>
            <h1>Add a New Exhibit</h1>
            {message}
            
            <form method="POST" action="/exhibits">
              <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="name">Exhibit Name</label>
                  <input className="form-control" id="name" name="name" required />
                </div>

                <div className="form-group col-sm-4">
                  <label htmlFor="tags">Tags</label>
                  <input className="form-control" id="city" name="city" />
                </div>

                <div className="form-group col-sm-4">
                  <label htmlFor="regions">Regions</label>
                  <input className="form-control" id="city" name="city" />
                </div>

                <div className="form-group col-sm-4">
                  <label htmlFor="timePeriod">Time Period</label>
                  <input className="form-control" id="city" name="city" />
                </div>

                <div className="form-group col-sm-4">
                  <label htmlFor="description">Description</label>
                  <input className="form-control" id="city" name="city" />
                </div>

                <div className="form-group col-sm-4">
                  <label htmlFor="sources">Sources</label>
                  <input className="form-control" id="city" name="city" />
                </div>

                <div className="form-group col-sm-4">
                  <label htmlFor="images">Images</label>
                  <input className="form-control" id="city" name="city" />
                </div>

                <div className="form-group col-sm-4">
                  <label htmlFor="videos">Videos</label>
                  <input className="form-control" id="city" name="city" />
                </div>

              </div>

              <input className="btn btn-primary" type="submit" value="Add Exhibit" />
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form