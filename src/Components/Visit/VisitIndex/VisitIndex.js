import React from 'react'

import {VISITPODS} from '../../../constants/visitPods/visitPods';

class VisitIndex extends React.Component{
    state = {
        pods: VISITPODS
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
            <div>
                <img src="https://www.exploratorium.edu/sites/default/files/styles/banner_image/public/feature_slides/Corona_Banner_960x380_2.jpg?itok=wuGiGKPL" />
                <h1>The Exploratorium is temporarily closed.</h1>
                <div className="visit-pods">
                    {this.displayPods()}
                </div>
            </div>
        );
    };
};

export default VisitIndex;
