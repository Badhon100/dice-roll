import React, { Component } from 'react';
import Die from './die';

class RollDice extends Component {

    static defaultProps = {
        sides : ["one", "two", "three", "four", "five", "six"]
         
    };
    constructor(props){
        super(props);
        this.state = { 
            die1: "one"
        }
        this.roll = this.roll.bind(this);
        
    }
    roll(){
        const newDie = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]; 
        this.setState({die1: newDie}); 
        
    }

    render() { 
        return ( 
            <div>
                <Die face = {this.state.die1} />
                
                <button onClick = {this.roll}>Roll Dice</button>
            </div>
         );
    }
}
 
export default RollDice;