import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
    render(){
        return(
            <div className="footerContainer">
                <div className="footerContent">
                    <ul className="footerMenuLeft left">
                        <li className="left">© 2018 GitHub, Inc.</li>
                        <li className="left"><a href="#" className="linkStyle">Terms</a></li>
                        <li className="left"><a href="#" className="linkStyle">Privacy</a></li>
                        <li className="left"><a href="#" className="linkStyle">Security</a></li>
                        <li className="left"><a href="#" className="linkStyle">Status</a></li>
                        <li className="left"><a href="#" className="linkStyle">Help</a></li>
                    </ul>
                    <div className="footerLogo left">
                        <a href="https://github.com"><img src="https://www.shareicon.net/download/2016/08/01/639872_development.ico" /></a>
                    </div>
                    <ul className="footerMenuRight right">
                        <li className="left"><a href="#" className="linkStyle">Contact GitHub</a></li>
                        <li className="left"><a href="#" className="linkStyle">API</a></li>
                        <li className="left"><a href="#" className="linkStyle">Training</a></li>
                        <li className="left"><a href="#" className="linkStyle">Shop</a></li>
                        <li className="left"><a href="#" className="linkStyle">Blog</a></li>
                        <li className="left"><a href="#" className="linkStyle">About</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Footer;