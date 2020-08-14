import React from 'react';

import {visitAsideLinks as VISITLINKS} from '../../constants/asideLinks/asideLinks';
import {educationAsideLinks as EDUCATIONLINKS} from '../../constants/asideLinks/asideLinks';
import {exploreAsideLinks as EXPLORELINKS} from '../../constants/asideLinks/asideLinks';
import {aboutAsideLinks as ABOUTLINKS} from '../../constants/asideLinks/asideLinks';

class Aside extends React.Component{
    state={
            header: '',
            links: [],
    };

    componentDidMount(){
        if(this.props.type == 'visit'){
            this.setState({links:VISITLINKS});
        } else if (this.props.type =="education"){
            this.setState({links:EDUCATIONLINKS});
        } else if(this.props.type=="explore"){
            this.setState({links:EXPLORELINKS});
        } else if(this.props.type=="about"){
            this.setState({links:ABOUTLINKS});
        }
        this.setState({header:this.props.asideHeader});
    };

    displayAside = () =>{
        let elements = [];
        this.state.links.forEach(link=>{
            elements.push(
                <a href={link.href}>{link.text}</a>
            );
        });
        return elements;
    }
    
    render(){
        return(
            <div className="aside-links">
                <a href={this.props.asideHeaderLink}><h4>{this.props.asideHeader}</h4></a>
                {this.displayAside()}
            </div>
        );
    };
};

export default Aside;
