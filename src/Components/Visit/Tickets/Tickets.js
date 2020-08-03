import React from 'react';

import './Tickets.css';

function Tickets(){
    return(
        <div className="tickets">
            <h1>Buy Tickets</h1>
            <p>Ready to visit? Buy your tickets at the museum or online. You can print your tickets or open the PDF ticket on your mobile device, and show it at the door. No convenience fees; just convenience! Either way, we’ll see you soon.</p>
            <p>Tickets are valid only for the date you select. They are nontransferable. Unsure about what day you’re coming to the Exploratorium? Have out-of-town guests planning to visit the museum, but don’t know the specific date? Consider purchasing an open-ended gift card.</p>
            <div className="covid-notice">
                <p>In accordance with local and state public health orders and recommendations, the Exploratorium is temporarily closed to the public.</p>
                <p>We appreciate the understanding and patience of our community, and we hope to welcome you back to the Exploratorium in the near future.</p>
            </div>
        </div>
    );
};

export default Tickets;
