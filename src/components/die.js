import React, { Component } from 'react';
import '../css/Die.css';
class Die extends Component {
    state = {  
        
    }

    render() { 
        return ( 
            <div>
                <i className = {`die fas fa-dice-one`}></i>
            </div>
         );
    }
}
 
export default Die;