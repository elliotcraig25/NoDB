import React, {Component} from 'react';

import ScenarioDisplay from './ScenarioDisplay/ScenarioDisplay';
import Responses from './Responses/Responses';

class ScenarioAndResponse extends Component {
    constructor(){
        super();
        this.state = {
            
        };
    };
    render(){
        return(
            <div className="scenario-and-response">
                <ScenarioDisplay />
                <Responses />
            </div>
        )
    }
}

export default ScenarioAndResponse