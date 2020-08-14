import React from 'react';

import Aside from '../../Components/Aside/Aside';
import Pods from '../../Components/Pods/Pods';

function AboutContainer(){
    return(
        <div className="education container-content container content">
            <div className="education-aside aside">
                <div className="aside-links">
                        <Aside asideHeader="About" asideHeaderLink="/about" type="about"/>
                </div>
            </div>
            <div>
                <h1>About</h1>
                <h3>Mission, Vision, Values</h3>
                <p>Located in San Francisco, California, the Exploratorium is a public learning laboratory exploring the world through science, art, and human perception. Our mission is to create inquiry-based experiences that transform learning worldwide. Our vision is a world where people think for themselves and can confidently ask questions, question answers, and understand the world around them. We value lifelong learning and teaching, curiosity and inquiry, our community, iteration and evidence, integrity and authenticity, sustainability, and inclusion and respect.</p>
                <p>We create tools and experiences that help you to become an active explorer: hundreds of explore-for-yourself exhibits, a website with over 35,000 pages of content, film screenings, evening art and science events for adults, plus much more. We also create professional development programs for educators, and are at the forefront of changing the way science is taught. We share our exhibits and expertise with museums worldwide.</p>
                <Pods type="explore" />
            </div>
            
        </div>
    );
};

export default AboutContainer;
