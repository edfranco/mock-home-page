import React from 'react';

import VisitRoutes from '../../config/VisitRoutes';
import Aside from '../../Components/Aside/Aside';   

import './VisitContainer.css';


class VisitContainer extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div className="visit content">
                <div className="visit-content">
                <div className="visit-aside">
                <div className="aside-links">
                    <Aside />
                </div>
                </div>
                <VisitRoutes />
                </div>
            </div>
        );
    };
};

export default VisitContainer;
