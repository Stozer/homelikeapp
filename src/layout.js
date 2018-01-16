import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Main from './main';
import Project from './project';
import Footer from './footer';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const MainPage = () => (
    <Main />
)
const ProjectPage = () => (
    <Project />
)

class Layout extends React.Component {
    render(){
        return(
            <div className="appContainer">
                <Header />
                    <Router>
                        <div>
                            <Route exact path="/" component={MainPage}/>
                            <Route path="/project" component={ProjectPage}/>
                        </div>
                    </Router>
                <Footer />
            </div>
        )
    }
}
export default Layout;