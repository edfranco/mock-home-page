import React from 'react';

import exploLogo from '../../images/explo-logo-white.svg';

function Footer(){
    return(
        <div className="footer">
        <img className="explo-logo" src={exploLogo} />
        <div className="footer-links">
          <a>visit</a>
          <a>join</a>
          <a>give</a>
        </div>
      </div>
    );
};

export default Footer;
