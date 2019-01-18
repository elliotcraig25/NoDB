import React, {Component} from 'react';

import MainBodyTitle from './MainBodyTitle/MainBodyTitle';
import ScenarioAndResponses from './ScenarioAndResponses/ScenarioAndResponse';

class MainBody extends Component {
    constructor(){
        super();
        this.state = {

        };
    };
    render(){
        return (
            <div className="main-section">
                <MainBodyTitle />
                <ScenarioAndResponses />
            </div>
        );
    };
};

export default MainBody