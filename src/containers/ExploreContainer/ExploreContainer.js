import React from 'react';

import Aside from '../../Components/Aside/Aside';

function ExploreContainer(){
    return(
        <div className="education container-content container content">
            <div className="education-aside aside">
                <div className="aside-links">
                        <Aside asideHeader="Explore" asideHeaderLink="/Explore" type="explore"/>
                </div>
            </div>
            <div>
                <img src="https://www.exploratorium.edu/sites/default/files/styles/banner_image/public/feature_slides/Tinkering-at-home-960x380_0.jpg?itok=0k8ypwpT" />
                <h1>Explore, Play, Discover: Websites, Activities, and More</h1>
                <p>Dive into websites, activities, apps, and more.</p>
            </div>
            
        </div>
    );
};

export default ExploreContainer;
