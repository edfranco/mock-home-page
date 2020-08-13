import React from 'react';

import Aside from '../../Components/Aside/Aside';

function EducationContainer(){
    return(
        <div className="education container-content container content">
            <div className="education-aside aside">
                <div className="aside-links">
                        <Aside asideHeader="Education" asideHeaderLink="/education" type="education"/>
                </div>
            </div>
            <div>
                <img src="https://www.exploratorium.edu/sites/default/files/styles/banner_image/public/feature_slides/1_Explainers_DSC_6707_homepage.jpg?itok=1g7Lt_aX" />
                <h1>Education</h1>
                <p>We believe that learning is joyful and lifelong. By creating inquiry-based experiences and tools that spark wonder; offer hands-on experiences; and encourage questions, explorations, and individual discovery, we're transforming the way people learn. Learning this way empowers people to figure things out for themselves—about science, but also about any topic, claim, or idea.</p>
                <p>If you're a teacher, parent, student, after-school educator, or professional developer, there are lots of unique resources here for you. Dive in and see what you discover.</p>
            </div>
            
        </div>
    );
};

export default EducationContainer;
