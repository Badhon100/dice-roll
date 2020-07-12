import React, { Component } from 'react';
import Die from './die';
import '../css/rollDice.css';
class RollDice extends Component {

    static defaultProps = {
        sides : ["one", "two", "three", "four", "five", "six"]
         
    };
    constructor(props){
        super(props);
        this.state = { 
            die1: "one", rolling: false
        }
        this.roll = this.roll.bind(this);
        
    }
    roll(){
        const newDie = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]; 
        this.setState({die1: newDie, rolling: true}); 
        setTimeout(()=>{
            this.setState({rolling: false});
        }, 1000);
        
    }

    render() { 
        return ( 
            <div className = "RollDice">
                <Die face = {this.state.die1} />
                
                <button onClick = {this.roll} disabled = {this.state.rolling}><b>{this.state.rolling ? "Rolling..." : "Roll Dice"}</b></button>
            </div>
         );
    }
}
 
export default RollDice;