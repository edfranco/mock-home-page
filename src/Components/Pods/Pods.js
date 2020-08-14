import React from 'react';

import {VISITPODS} from '../../constants/visitPods/visitPods';
import {EXPLOREPODS} from '../../constants/visitPods/visitPods';

class Pods extends React.Component{
    state = {
        pods: []
    };

    componentDidMount(){
        if(this.props.type == 'visit'){
            this.setState({pods:VISITPODS});
        } else if (this.props.type == 'explore'){
            this.setState({pods:EXPLOREPODS});
        }
    }
    
    displayPods = () => {
        const pods = [];
        this.state.pods.forEach(pod=>{
            pods.push(
                <div className="visit-pod">
                    <img className="visit-pod-img" src={pod.image}/>
                    <p>{pod.header}</p>
                    <p>{pod.content}</p>
                </div>
            );
        });
        return pods;
    }
    
    render(){
        return(
            <div className="pod">
                <div className="visit-pods">
                    {this.displayPods()}
                </div>
            </div>
        );
    };
};

export default Pods;
