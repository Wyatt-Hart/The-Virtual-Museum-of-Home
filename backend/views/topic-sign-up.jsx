const React = require('react')
const Def = require('./default')

function topicSignUp () {
    return (
        <Def>
            <main>
                <h1>Claim Your Exhibit Topics</h1>

                <div>
                    <p>
                    Please choose your exhibit topic at least two weeks before it's due. After that, you'll lose five points from your exhibit grade for each day you've failed to claim a topic. If another student has already claimed a topic then you must choose something else.
                    </p>
                </div>

                <form method="POST" action="/topic-sign-up">

                    <div className="row">
                        <div className="form-group col-sm-6">
                        <label htmlFor="topic">Exhibit Topic</label>
                        <input className="form-control" id="topic" topic="topic" required />
                        </div>
                    </div>

                    <input className="btn btn-primary" type="submit" value="Add Topic" />
                    
                </form>

            </main>
        </Def>
    )
}

module.exports = topicSignUp