import React from 'react';

import VisitRoutes from '../../config/VisitRoutes';

import './VisitContainer.css';


class VisitContainer extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div className="visit content">
                <div className="visit-content">
                <div className="visit-aside">
                <div className="aside-links">
                        <a href="/visit"><h4>Visit</h4></a>
                        <a href="./visit/tickets">Buy Tickets</a>
                        <a>Frequently Asked Questions</a>
                        <a>Calendar</a>
                        <a>Hours</a>
                        <a>Getting Here</a>
                        <a>Museum Map</a>
                        <a>Reduced Rates & Community Day</a>
                        <a>Accessibility</a>
                        <a>Tips for Visiting with Kids</a>
                        <a>Exhibits</a>
                        <a>Tactile Dome</a>
                        <a>Artworks on View</a>
                        <a>Cinema Arts</a>
                        <a>Kanbar Forum</a>
                        <a>Black Box</a>
                        <a>Museum Galleries</a>
                        <a>Restaurant & Café</a>
                        <a>School Field Trips</a>
                        <a>Groups / Tour Operators</a>
                        <a>Event Rentals</a>
                        <a>Exploratorium Store</a>
                        <a>Contact Us</a>
                        <a>Español</a>
                        <a>繁體中文</a>
                        <a>简体中文</a>
                        <a>한국어</a>
                        <a>Français</a>
                        <a>Deutsch</a>
                        <a>Português</a>
                        <a>日本語</a>
                    </div>
                </div>
                <VisitRoutes />
                </div>
            </div>
        );
    };
};

export default VisitContainer;
