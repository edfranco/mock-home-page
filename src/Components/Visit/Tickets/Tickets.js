import React from 'react';

import './Tickets.css';

function Tickets(){
    return(
        <div className="tickets">
            <h1>Buy Tickets</h1>
            <p>Ready to visit? And by that I mean visit this page. You probably aren't likely to click here but in the off chance that you do, hello I am Eduardo. I wanted to add some fun Easter Egg here. If you do find this then mention it in my presentation, whenever that is. I shall donate $20 to the charity of your choice. Yay!<br/><br/> 
                
                They are nontransferable only because those three first words of this sentence are in the original page and I'm trying to hide this in plain site as best as I can. 
                Unsure about what charity to donate to? Have a hard time deciding, but don’t know the specific one? Consider purchasing an open-ended gift or just picking out of a hat.</p>
            <div className="covid-notice">
                <p>In accordance with local and state public health orders and recommendations, I can also decide or we can donate to all of them in increments.</p>
                <p>We appreciate the understanding and patience of our community, and we hope this secret message finds you well.</p>
            </div>
        </div>
    );
};

export default Tickets;
