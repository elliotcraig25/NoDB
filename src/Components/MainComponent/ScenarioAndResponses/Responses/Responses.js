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
                <ResponseA1 identification = 'a'/>
                <ResponseA1 identification = 'b'/>
                <ResponseA1 identification = 'c'/>
                <ResponseA1 identification = 'd'/>
            </div>
        )
    }
}

export default Responses