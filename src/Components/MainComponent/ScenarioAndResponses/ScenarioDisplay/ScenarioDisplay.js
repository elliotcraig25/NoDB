import React, {Component} from 'react';
// import axios from 'axios';

class ScenarioDisplay extends Component {
    constructor(){
        super();
        this.state = {
            messageFromResponse: 'xyz'
        };
    };
    render(){
        return(
            <div className='scenario-display'>
                <p>{this.state.messageFromResponse}</p>
            </div>
        );
    };
};

export default ScenarioDisplay