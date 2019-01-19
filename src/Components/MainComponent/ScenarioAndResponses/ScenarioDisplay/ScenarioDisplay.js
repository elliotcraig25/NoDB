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
    
    componentDidMount(){
        axios.get(`/api/info`).then(response=>{
            this.setState({
                messageFromResponse: response.data
            })
        })
        console.log(this.state.messageFromResponse)
    }

    // handleGettingMessages(){
    //         axios.get(`/api/info`).then(response=>{
    //             this.setState({
    //                 messageFromResponse: response.data
    //             })
    //         })
    //     console.log(this.state.messageFromResponse)
    // }

    render(){
        return(
            <div className='scenario-display'>
                {/* <button className="scenario-display-button" onClick={this.handleGettingMessages}>Get</button> */}
                <p>{this.state.messageFromResponse}</p>
            </div>
        );
    };
};

export default ScenarioDisplay