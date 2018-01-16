import React from 'react';
import ReactDOM from 'react-dom';
import {
    Link
} from 'react-router-dom';
class Main extends React.Component {
    render(){
        return(
            <div className="mainContainer">
                <div className="mainLeftContainer left">
                    <a href="#">
                        <img src="https://avatars1.githubusercontent.com/u/4229186?s=460&v=4" />
                    </a>
                    <div className="userInfo">
                        <div className="userName">Zare</div>
                        <div className="userNickName">Stozer</div>
                    </div>
                </div>
                <div className="mainRightContainer left">
                    <span>Repositories</span>
                    <ol>
                        <li>
                            <div>
                                <Link to="/project" className="linkStyle repoLink">project</Link>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}
export default Main;