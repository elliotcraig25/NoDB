import React, {Component} from 'react';
import axios from 'axios';

class ScenarioDisplay extends Component {
    constructor(){
        super();
        this.state = {
            messageFromResponse: []
        };
        // this.handleGettingMessages = this.handleGettingMessages.bind( this );
    };
    
    // componentDidMount(){
    //     axios.get(`/api/info`).then(response=>{
    //         this.setState({
    //             messageFromResponse: response.data
    //         })
    //     })
    //     console.log(this.state.messageFromResponse)
    // }

    
    componentDidMount(){
        axios.get(`/api/info`).then(response=>{
            this.setState({
                messageFromResponse: response.data
            })
        })
        console.log(this.state.messageFromResponse)
    }

    

    handleGettingMessages(){
        axios.get(`/api/info`).then(response=>{
            this.setState({
                messageFromResponse: response.data
            })
        })
        console.log(this.state.messageFromResponse)
    }
 
    render(){
        let mapped = this.state.messageFromResponse.map((element)=>{
            return (
                <p>{element}</p>
            )
        })
        console.log(this.state.messageFromResponse)
        return(
            <div className='scenario-display'>
                {/* <button className="scenario-display-button" onClick={this.handleGettingMessages}>Get</button> */}
                <p>{mapped}</p>
            </div>
        );
    };
};

export default ScenarioDisplay