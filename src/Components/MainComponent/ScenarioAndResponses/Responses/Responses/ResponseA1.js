import React, {Component} from 'react';

class ResponseA1 extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            submitedInput: '',
        }
    }
    
    handleUserInput(value){
        this.setState({
            userInput: value
        })
    }

    handleButtonClick(){
        this.setState({
            submitedInput: this.state.userInput
        })
        console.log(this.state.submitedInput)
    }

    render(){
        return(
            <div className='response-a-one' >
                <input 
                    onChange={(e)=>this.handleUserInput(e.target.value)}
                />
                <button onClick={()=>this.handleButtonClick()}>abc</button>
            </div>
        ) 
    }
}

export default ResponseA1