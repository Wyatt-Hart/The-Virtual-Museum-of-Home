import React, { useState } from 'react';
import Alert from 'Alerts';

const React = require('react');

function Example() {
  // Declare a new state variable, which we'll call "count"
  const editor = ('${exhibit.id.author}');
  const user = loginUsername;

  if (editor == user) {
    
    return <button disabled={false}>Edit</button>

  } else {
    
    return <button disabled={true} onClick={Alert()}></button>
  }

{/*This code probably isn't important. It prevents children from being added to editable elements. You might want to to this, because this children will automatically be editable.

const EditableElement = (props) => {
    const { onChange } = props;
    const element = useRef();
    let elements = React.Children.toArray(props.children);
    if (elements.length > 1) {
      throw Error("Can't have more than one child");
    }
    const onMouseUp = () => {
      const value = element.current?.value || element.current?.innerText;
      onChange(value);
    };
    useEffect(() => {
      const value = element.current?.value || element.current?.innerText;
      onChange(value);
    }, []);
    elements = React.cloneElement(elements[0], {
      contentEditable: true,
      suppressContentEditableWarning: true,
      ref: element,
      onKeyUp: onMouseUp
    });
    return elements;
  }; 

*/}

export default function Edit() {
    const initialValue = "value";
    const [value, setValue] = useState(initialValue);
    const handleChange = (value) => {
      setValue(value);
    };
    return (
      <div className="Exhibit">
        <EditableElement onChange={handleChange}>
          <div style={{ outline: "none" }}>
            <p>{initialValue}</p>
          </div>
        </EditableElement>
        <label>{value}</label>
      </div>
    );
  }

{/* Original coding effort

import { useNavigate } from 'react-router-dom'
import Def from './default'
const React = require('react')

export default function EditExhibit(exhibit) {
  let navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    attemptSubmit(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value, e.target[5].value, e.target[6].value, e.target[7].value)
  }
  const attemptEdit = async(name, tags, regions, timePeriod, description, sources, images, videos) => {
    let response = await fetch('/api/exhibits',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        }    
    )
    
  }
    
    return (
      <Def>
        <div className>EditExhibit</div>
        <h2>Edit ${exhibit.name}</h2>
        <div style={{width: '80vw', margin: 'auto', textAlign: 'center'}}>
          <h1>${exhibit.name}</h1>
          <div className="topics-new">
            
            <form onSubmit={handleSubmit} method='POST' action={`/api/exhibits/${exhibit.id}?_method=PUT`} style={{width: '60vw', margin: 'auto'}}>
              <div className="row" style={{justifyContent: 'center'}}>
                <div className="form-group col-6">
                            <label htmlFor="name">${exhibit.name}</label>
                            <input style={{width: '90%', margin: '1vw'}} className="form-control" id="name" name="name" value={data.exhibit.name} required />
                </div>
                <div className="form-group col-6">
                            <label htmlFor="regions">${exhibit.regions}</label>
                            <input style={{width: '90%', margin: '1vw'}} className="form-control" id="regions" name="regions" value={data.exhibit.regions}/>
                </div>
                <div className="form-group col-6">
                            <label htmlFor="timePeriod">${exhibit.timePeriod}</label>
                            <input style={{width: '90%', margin: '1vw'}} className="form-control" id="timePeriod" name="timePeriod" value={data.exhibit.timePeriod}/>
                </div>
              </div>
              <div className="form-group col-md">
                          <label htmlFor="description">${exhibit.description}</label>
                          <textarea style={{width: '90%', height:'50vh', margin: '1vw'}} className="form-control" id="description" name="description" value={data.exhibit.description}/>
              </div>
              <div className='row' style={{justifyContent: 'center'}}>
                <div className="form-group col-sm-6">
                            <label htmlFor="sources">${exhibit.sources}</label>
                            <input style={{width: '90%', margin: '1vw'}} className="form-control" id="sources" name="sources" value={data.exhibit.sources}/>
                </div>
                <div className="form-group col-sm-6">
                            <label htmlFor="tags">${exhibit.tags}</label>
                            <input style={{width: '90%', margin: '1vw'}} className="form-control" id="tags" name="tags" value={data.exhibit.tags}/>
                </div>
                <div className="form-group col-sm-6">
                            <label htmlFor="images">${exhibit.images}</label>
                            <input style={{width: '90%', margin: '1vw'}} className="form-control" id="images" name="images" value={data.exhibit.images}/>
                </div>
                <div className="form-group col-sm-6">
                            <label htmlFor="videos">${exhibit.videos}</label>
                            <input style={{width: '90%', margin: '1vw'}} className="form-control" id="videos" name="videos" value={data.exhibit.videos}/>
                </div>
              
              </div>
              
              <button type="submit" className="btn btn-primary" >Submit Edits</button>  
            </form>

          </div>
        </div>
      </Def>
    )
}
*/}