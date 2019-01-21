import React, {Component} from 'react';
import axios from 'axios';

class ResponseA1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            submitedInput: '',
            identification: this.props.identification
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
        
        if(this.state.identification==='a'){
            axios.put(`/api/info/a`, bodyObj)
            .then(res => {
                console.log(res.data)
            })
        }else if(this.state.identification==='b'){
            axios.put(`/api/info/b`, bodyObj)
            .then(res => {
                console.log(res.data)
            })
        }else if(this.state.identification==='c'){
            axios.put(`/api/info/c`, bodyObj)
            .then(res => {
                console.log(res.data)
            })
        }else if(this.state.identification==='d'){
            axios.put(`/api/info/d`, bodyObj)
            .then(res => {
                console.log(res.data)
            })
        }
        
    }

    handleAddRandom(){
        if(this.state.identification==='a'){
            axios.get(`https://randomuser.me/api/?results=1`)
            .then(res => {
                console.log(res.data.results[0].name.first)
                this.setState({
                    submitedInput: res.data.results[0].name.first
            })
        })
        }else if(this.state.identification==='b'){
            axios.get(`https://randomuser.me/api/?results=1`)
            .then(res => {
                console.log(res.data.results[0].location.city)
                this.setState({
                    submitedInput: res.data.results[0].location.city
                })
            })
        }else if(this.state.identification==='c'){
            axios.get(`https://randomuser.me/api/?results=1`)
            .then(res => {
                console.log(res.data.results[0].name.first)
                this.setState({
                    submitedInput: res.data.results[0].name.first
            })
        })
        }else if(this.state.identification==='d'){
            axios.get(`https://randomuser.me/api/?results=1`)
            .then(res => {
                console.log(res.data.results[0].name.first)
                this.setState({
                    submitedInput: res.data.results[0].name.first
                })
            })
        } 
        
        
        
        
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
                        <button onClick={()=>this.handleAddRandom()}>Add Random</button>
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