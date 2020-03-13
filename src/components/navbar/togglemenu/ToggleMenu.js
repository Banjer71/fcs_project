import React from 'react';
import {Btn} from '../NavBarStyles'


const ToggleMenu = () => {
    return ( 
        <div>
        <Btn>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </Btn>

        <ul>
            <li><a href='#'>Gallery</a></li>
            <li><a href='#'>Elaborations</a></li>
            <li><a href='#'>Collaborations</a></li>
            <li><a href='#'>Contacts</a></li>
        </ul>
        </div>
     );
}
 
export default ToggleMenu;