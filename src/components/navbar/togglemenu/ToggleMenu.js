import React from 'react';
import styled from 'styled-components'

const Btn = styled.div`
    border: 1px solid green;
    display: inline-block;

    > .bar {
        width: 30px;
        margin: 3px;
        height: 4px;
        color: rgb(139,139,137);
        background: grey;
    }
`;


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