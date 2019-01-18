import React, {Component} from 'react';

import MainBodyTitle from './MainBodyTitle/MainBodyTitle';
import ScenarioDisplay from './ScenarioAndResponses/ScenarioDisplay/ScenarioDisplay';

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
                <ScenarioDisplay />
            </div>
        );
    };
};

export default MainBody