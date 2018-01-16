import React from 'react';
import ReactDOM from 'react-dom';
import {
    Link
} from 'react-router-dom';
class Project extends React.Component {
    render(){
        return(
            <div className="mainContainer">
                <span><Link to="/" className="projectLink">Stozer</Link></span>/<strong><a href="#" className="projectLink" >project</a></strong>
            </div>
        )
    }
}
export default Project;