import React, {Component} from 'react';

import ResponseA1 from './Responses/ResponseA1'

class Responses extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div className='responses-display'>
                <ResponseA1 />
                <ResponseA1 />
                <ResponseA1 />
                <ResponseA1 />
            </div>
        )
    }
}

export default Responses