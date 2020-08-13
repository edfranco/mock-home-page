import React from 'react';

import {visitAsideLinks as LINKS} from '../../constants/asideLinks/asideLinks';

class Aside extends React.Component{
    state={
        asideContent: {
            header: 'Visit',
            links: LINKS,
        }
    }

    displayAside = () =>{
        let elements = [];
        this.state.asideContent.links.forEach(link=>{
            elements.push(
                <a href={link.href}>{link.text}</a>
            );
        });
        return elements;
    }
    
    render(){
        return(
            <div className="aside">
                <a href="/visit"><h4>Visit</h4></a>
                {this.displayAside()}
            </div>
        );
    };
};

export default Aside;
