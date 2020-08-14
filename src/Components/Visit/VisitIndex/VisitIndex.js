import React from 'react'

import Pods from '../../../Components/Pods/Pods';

function VisitIndex(){
    return(
        <div>
            <img src="https://www.exploratorium.edu/sites/default/files/styles/banner_image/public/feature_slides/Corona_Banner_960x380_2.jpg?itok=wuGiGKPL" />
            <h1>The Exploratorium is temporarily closed.</h1>
            <Pods type="visit" />
        </div>
    );
};

export default VisitIndex;
