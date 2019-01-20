import React, {Component} from 'react';
import axios from 'axios';

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
        // console.log(this.state.submitedInput)
    }

    clearSumbitedInput(){
        this.setState({
            submitedInput: ''
        })
    }

    updateResponse(){
        let bodyObj = {
            text: this.state.submitedInput
        }
        axios.put(`/api/info`, bodyObj)
            .then(res => {
                console.log(res.data)
            })
    }

    // //this is what i'm working on at commit
    // postResponseBoxInfo(){
    //     let bodyObj = {
    //         text: this.state.submitedInput
    //     }
    //     axios.post(`/api/info`, bodyObj).then(response=>{
    //         this.setState({
    //             info: response.data
    //         })
    //         console.log(this.state.info)
    //     })
    //     this.setState({
    //         submitedInput: ''
    //     })
    // }

    render(){ 
        return(
            <div className='response-a-one' >
                {this.state.submitedInput.length ? (
                    <div className='response-a-two'>
                        <p>{this.state.submitedInput}</p>
                        <button onClick={()=>this.clearSumbitedInput()}>Reset</button>
                        <button onClick={()=>this.updateResponse()}>Add</button>
                    </div>
                ) : (
                    <div className='response-a-two'>
                        <input className='response-input' 
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