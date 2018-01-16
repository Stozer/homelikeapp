import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render(){
        return(
            <div className="headerWrapper">
                <div className="header">
                    <div className="headerContainer">
                        <div className="logo left">
                            <a href="https://github.com/" className="logoLink">
                                <img src="https://shefcompsoc.uk/images/social/github.png" />
                            </a>
                        </div>
                        <div className="headerMenu left">
                            <div className="headerMenuLeft left">
                                <div className="headerSearch left">
                                    <input type="text" className="headerSearchInput" placeholder="Search GitHub"/>
                                </div>
                                <ul className="headerNav">
                                    <li><a href="#" className="headerNavLink left">Pull requests</a></li>
                                    <li><a href="#" className="headerNavLink left">Issues</a></li>
                                    <li><a href="#" className="headerNavLink left">Marketplace</a></li>
                                    <li><a href="#" className="headerNavLink left">Explore</a></li>
                                </ul>
                            </div>
                            <div className="headerMenuRight right">
                                <ul className="headerNavIcons">
                                    <li>
                                        <a href="#" className="headerNavIconsLink left">
                                            <img src="https://www.applozic.com/assets/resources/lib/images/icon-bell.png" className="bellImg" />
                                            <span className="tooltiptext">You have no unread notifications</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="headerNavIconsLink left">
                                            <img src="http://dryicons.com/uploads/icon/preview/9921/icon_grid_1x_be477657-9276-422b-a2b0-0c67d539e23b.png" className="plusImg" />
                                            <img src="http://images8.design-editor.com/93/9332889/3958%2FFA2B5939-E7B5-B4D5-2506-565D38CFCC0B.png" className="arrowImg" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="headerNavIconsLink left thubm">
                                            <img src="https://avatars2.githubusercontent.com/u/4229186?s=40&v=4" className="thumbnail" />
                                        </a>
                                        <a href="#" className="headerNavIconsLink left thumbLink">
                                            <img src="http://images8.design-editor.com/93/9332889/3958%2FFA2B5939-E7B5-B4D5-2506-565D38CFCC0B.png" className="arrowImg" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;