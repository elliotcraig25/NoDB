import React, {Component} from 'react';

class SideButtonsComponent extends Component {
    constructor(){
        super()
        this.state = {
            tutorial: ''
        }
    }
    handleSureClick(){
        this.setState({
            tutorial: 'Too bad.'
        })
    }
    handleImAlrightClick(){
        this.setState({
            tutorial: 'Fair enough, enjoy the website!'
        })
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.handleSureClick()}>Sure!</button>
                <button onClick={()=>this.handleImAlrightClick()}>I'm alright, thanks</button>
                <p>{this.state.tutorial}</p>
            </div>
        )
    }
}

export default SideButtonsComponent