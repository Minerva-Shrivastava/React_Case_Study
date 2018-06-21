import React  from 'react';
import '../css/buttonGrid.css';

class ButtonGrid extends React.Component{

    handleClick = (event) =>{
        this.props.handleClick(event);
    } 

    render() {
        return(	
            <div className="buttonsContainer">
                <div className="gridContainer">
                    <button value="1" onClick={this.handleClick} className="buttons">1</button>
                    <button value="2" onClick={this.handleClick} className="buttons">2</button>
                    <button value="3" onClick={this.handleClick} className="buttons">3</button>
                    <button value="Clear" onClick={this.handleClick} className="buttons">C</button>
                    <button value="4" onClick={this.handleClick} className="buttons">4</button>
                    <button value="5" onClick={this.handleClick} className="buttons">5</button>
                    <button value="6" onClick={this.handleClick} className="buttons">6</button>
                    <button value="+" onClick={this.handleClick} className="buttons">+</button>
                    <button value="7" onClick={this.handleClick} className="buttons">7</button>
                    <button value="8" onClick={this.handleClick} className="buttons">8</button>
                    <button value="9" onClick={this.handleClick} className="buttons">9</button>
                    <button value="-" onClick={this.handleClick} className="buttons">-</button> 
                    <button value="0" onClick={this.handleClick} className="buttons">0</button>
                    <button value="Equal" onClick={this.handleClick} className="buttons">=</button>
                    <button value="*" onClick={this.handleClick} className="buttons">*</button>
                    <button value="/" onClick={this.handleClick} className="buttons">/</button>
                </div>
            </div>
            );
    }
}

export default ButtonGrid;