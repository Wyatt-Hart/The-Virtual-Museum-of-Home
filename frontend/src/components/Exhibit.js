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

    const updateIndex = (newIndex) => {
        
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex)
    };

    useEffect(() => {
        fetch(`/api/exhibits/${id}`)
            .then((res) => res.json())
            .then((data => setExhibit(data)))
            .then((activeIndex) => setActiveIndex(activeIndex))
    }, [])
    
    return (
        <Def>
            <nav className='exhibitbar'>
              <ul>
                <li className="title-exhibit">
                    <h2>{exhibit.name !== undefined ? exhibit.name : 'Loading'}</h2>
                </li>
                <li>
                    <button type="edit" className="editbtn" >Edit</button>
                </li>  
              </ul>
            </nav>

            <div>    
                <img style={{borderRadius: '100%', objectFit: 'contain', width: '18rem', height: '18rem', overflow: 'hidden'}} src={exhibit.images !== undefined ? Object.keys(exhibit['images'])[0] : 'Loading'} />
            </div>

            <div className="exhibit-container">  
                <div>
                    <p>{exhibit.regions !== undefined ? exhibit.regions[0] : ''}</p>
                    <p>{exhibit.timePeriod !== undefined ? exhibit.timePeriod : ''}</p>
                    <p style={{textAlign:'left'}}>{exhibit.description !== undefined ? exhibit.description : ''}</p>
                    {/* <p>{exhibit.sources !== undefined ? exhibit.sources : ''}</p> */}
                </div>
                {/*All exhibit Images/Files will be children of "exhibit-container". Exhibit-container is also the viewer that shifts backwards or forwards to make the files visible/unhidden*/}

                <div className="exhibit-files" style={{transform: `translateX(-${activeIndex}%)`}}>

                    {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"});
                    })}
                </div>


                <div className="arrows">
                    <button onClick={() => {
                    updateIndex(activeIndex - 1);
                    }}
                    >Prev</button>
                
                    <button onClick={() => {
                    updateIndex(activeIndex + 1);
                    }}
                    >Next</button>
                </div>

            </div>
        </Def>
    );
};

export default Exhibit;
