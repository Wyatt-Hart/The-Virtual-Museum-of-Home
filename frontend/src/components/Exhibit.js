import { createRoutesFromChildren, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Def from './default';

const React = require('react');

export const ExhibitItem = ({children, width}) => {
    return (
        <div className="exhibit-item" style={{width: width}}>
            {children}
        </div>
    );
};

const Exhibit = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const id = Object.values(useParams())[0]
    const [ exhibit, setExhibit ] = useState({})
    const userId = localStorage.getItem('token')
    const [ videoURL, setVideoURL ] = useState('')

    const updateIndex = (newIndex) => {
        
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex)
    };

    const setURL = ()=>{
            let newURL
            if(exhibit.videos.includes('&ab_channel')){
                newURL = exhibit.videos.split('&ab_channel')[0]
            }
            let holder = newURL.split('/watch?v=')

            let answer = holder[0] + '/embed/' + holder[1]

            setVideoURL(answer)
            console.log(answer)
    }

    useEffect(() => {
        (async ()=>{
        fetch(`/api/exhibits/${id}`)
            .then((res) => res.json())
            .then((data => {setExhibit(data)}))
            /* .then(() => {
                setTimeout(()=>{
                    let newURL
                    if(exhibit.videos.includes('&ab_channel')){
                        newURL = exhibit.videos.split('&ab_channel')[0]
                    }
                    let holder = newURL.split('/watch?v=')

                    let answer = holder[0] + '/embed/' + holder[1]

                    setVideoURL(answer)
                    console.log(answer)
                },100)
            }) */
        })()
    }, [])
    
    return (
        <Def>
            <nav className='exhibitbar'>
              <ul>
                <li className="exhibit-title">
                    <h2>{exhibit.name !== undefined ? exhibit.name : 'Loading'}</h2>
                </li>
                <li>
                    {userId===exhibit.authorId ? <button type="edit" className="editbtn" >Edit</button>:''}
                </li> 
              </ul>
            </nav>

            <nav className="contextbar">
              <ul> 
                <li className="exhibit-context">
                    <h3>Tags: {exhibit.tags !== undefined ? exhibit.tags: ''}</h3>
                </li>

                <li className="exhibit-context">
                    <h3>Regions: {exhibit.regions !== undefined ? exhibit.regions: ''}</h3>
                </li>

                <li className="exhibit-context">
                    <h3>Time Period: {exhibit.timePeriod !== undefined ? exhibit.timePeriod: ''}</h3>
                </li>  
              </ul>
            </nav>
            
          <div className="exhibitgrid">
            <div className="exhibit-image">Image    
                <img src={exhibit.images !== undefined ? exhibit.images: ''}/>
            </div>
          </div>
          <div className="video-viewer">
            <div className="exhibit-video">Video
                <script>{exhibit.videos !== undefined ? videoURL.length === 0 ? setURL() : '': ''}</script>
                {exhibit.videos !== undefined ?  <iframe width="745" height="419" src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : ''}

            </div>
          </div>

          <div>  
            <div className="exhibit-text">
                <p className="exhibit-description">Description: {exhibit.description !== undefined ? exhibit.description : ''}</p>

                <h3 className="exhibit-sources">Sources: {exhibit.sources !== undefined ? exhibit.sources : ''}</h3>
            </div>
          </div>
        </Def>
    );
};

export default Exhibit;
