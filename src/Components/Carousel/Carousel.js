import React from 'react';

import './Carousel.css';

function Carousel(props){
    console.log(props)
    return(
        <div className="carousel">
          <div className="carousel-image-container">
            <img className="carousel-image" src="https://www.exploratorium.edu/sites/default/files/feature_slides/LearninToolbox960x380.jpg"/>
          </div>
          {!props.path && <div className="carousel-content"><p>This is a test</p></div>}
        </div>
    );
};

export default Carousel;
