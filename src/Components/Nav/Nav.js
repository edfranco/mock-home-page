import React from 'react';
import {Link} from 'react-router-dom';

import magnifyingGlass from '../../images/baseline_search_white_18dp.png';
import exploLogo from '../../images/explo-logo-white.svg';

import './Nav.css';

function Nav(){
    return(
        <div className="nav">
            <Link to="/"><img className="explo-logo" src={exploLogo} height="50" width="200" alt="explo logo"/></Link>
            <div className="nav-links">
                <Link to="/visit">Visit</Link>
                <Link to="/education">Education</Link>
                <Link to="/explore">Explore</Link>
                <a>About Us</a>
                <a>Join + Support</a>
                <a>Store</a>
            </div>
            <div class="form-item form-type-textfield form-item-keys-15">
                <input placeholder="" type="text" id="edit-keys-15" name="keys_15" value="" size="15" maxlength="128" class="form-text"/>
                <input alt="submit" title="Submit search" class="custom-search-button form-submit form-submit" type="image" id="edit-submit-15" name="submit_15" value="Search" src={magnifyingGlass}/>
            </div>
        </div>   
    );
};

export default Nav;
