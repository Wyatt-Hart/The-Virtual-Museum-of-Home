const React = require('react')
const Def = require('../default')

function index (data) {
    let exhibitsFormatted = data.exhibits.map((exhibit) => {
      return (
        <div className="col-sm-6">
          
          <h2>
            <a href={`/exhibits/${exhibit.id}`} >
              {exhibit.name}
            </a>
          </h2>
          
          <p className="text-center">
            {exhibit.tags}
          </p>
          
          <p className="text-center">
            {exhibit.regions}
          </p>
          
          <p className="text-center">
            {exhibit.timePeriod}
          </p>
          
          <p className="text-center">
            {exhibit.description}
          </p>
          
          <p className="text-center">
            {exhibit.sources}
          </p>
          
          <img src={exhibit.images} alt={exhibit.name} />
          
          <iframe width="420" height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>

        </div>
        
      )
    })
    return (
      <Def>
          <main>
              <h1>The Virtual Museum of Home</h1>
              <div className="row">
                {exhibitsFormatted}
              </div>
          </main>
      </Def>
    )
  }

module.exports = index