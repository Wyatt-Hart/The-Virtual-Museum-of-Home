import { createRoutesFromChildren } from 'react-router-dom';
import { useState } from 'react'
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

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex)
    };

    return (
        <Def>
            <div className="exhibit-container">

            <h2 className="exhibit-title">Abraham Lincoln</h2>

    {/*All exhibit Images/Files with be children of "exhibit-container". Exhibit-container is also the viewer that shifts backwards or forwards to make the files visible/unhidden*/}

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