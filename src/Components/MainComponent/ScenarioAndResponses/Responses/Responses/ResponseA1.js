import React, {Component} from 'react';
// import axios from 'axios';

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
            submitedInput: this.state.userInput,
            userInput: ''
        })
        console.log(this.state.submitedInput)
    }

    clearSumbitedInput(){
        this.setState({
            submitedInput: ''
        })
    }

    render(){
        return(
            <div className='response-a-one' >
                {this.state.submitedInput.length ? (
                    <div>
                        <p>{this.state.submitedInput}</p>
                        <button onClick={()=>this.clearSumbitedInput()}>Reset</button>
                        <button>Add</button>
                    </div>
                ) : (
                    <div>
                        <input 
                        onChange={(e)=>this.handleUserInput(e.target.value)}
                        />
                        <button onClick={()=>this.handleButtonClick()}>Add</button> 
                    </div>
                )
                }
            </div>
        ) 
        // return(
        //     <div className='response-a-one' >
        //         <input 
        //             onChange={(e)=>this.handleUserInput(e.target.value)}
        //         />
        //         <button onClick={()=>this.handleButtonClick()}>abc</button>
        //     </div>
        // ) 
    }
}

export default ResponseA1