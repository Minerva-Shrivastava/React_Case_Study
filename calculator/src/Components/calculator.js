import React, { Component } from 'react';

import ResultBox from './resultBox';
import ButtonGrid from './buttonGrid';

class Calculator extends Component {

    constructor() {
        super();
        this.state = {
            result : ''
        };
        this.appendDataToResult = this.appendDataToResult.bind(this);
        this.calculateResult = this.calculateResult.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    appendDataToResult = (data) => {
        if(!isNaN(data)){
            this.setState({result:this.state.result+data}); //input is number
        }else if(!isNaN(this.state.result.charAt(this.state.result.length - 1))){ // input is char and last entered is a no.
                this.setState({result:this.state.result+data});
            }else { // input is char and last entered is a char.
                var newResult = this.state.result.substring(0,this.state.result.length-1);
                console.log(newResult);
                this.setState({
                    result : newResult+data
                });
            }
    }

    calculateResult = () => {
        var newExpression = this.state.result;
        if(newExpression.charAt(0) === '*' || newExpression.charAt(0) === '/' ){
            var newExpression = this.state.result.substring(1,this.state.result.length);
            console.log('final expression '+newExpression);
        }
        if(isNaN(newExpression.charAt(this.state.result.length - 1))){ 
            var newExpression = this.state.result.substring(0,this.state.result.length-1);
            var evaluation = eval(newExpression);
            console.log(evaluation);
            this.setState({
                result: String(evaluation)
            });
        }else {
            this.setState({
                result:String(eval(newExpression))
            });
        }
    }

    handleClick = (event) => {
        var input = event.target.value;
        switch (input) {
            case 'Clear':
              this.setState({result:''});
              break;
            case 'Equal':
                this.calculateResult();
                break;
            default:{
                        this.appendDataToResult(input); 
                    }
                //console.log('input is:'+input);
            }
          }

    render() {
        return (
            <div className="calculator-box">
                <div>
                    <ResultBox result={this.state.result} />
                    <ButtonGrid handleClick={this.handleClick}/>
                </div>
            </div>
        );
    }
}

export default Calculator;
