import React, {Component} from 'react';

import StatelessFunc from './StatelessFunc';
import SideButtonsComponent from './SideButtonsComponent';

class ParentSideComponent extends Component {
    constructor(){
        super();
        this.state = {
            theWord: 'Mark',
            theWordFinal: ''
        }
    }
    handleUserInput(value){
        this.setState({
            theWord: value
        })
        console.log(this.state.theWord)
    }
    moveToFinal(){
        this.setState({
            theWordFinal: this.state.theWord
        })
    }
    render(){
        return (
            <div className="sidebar">
                {this.state.theWordFinal.length ? (
                    <div className="sidebar">
                        <StatelessFunc word={this.state.theWordFinal}/>
                        <SideButtonsComponent />
                    </div>
                    
                ) : (
                    <div className="sidebar">
                        <p>Hi there, what's your name?</p>
                        <input onChange={(e)=>this.handleUserInput(e.target.value)}/>
                        <button onClick={()=>this.moveToFinal()}>That's my name</button>
                    </div>
                )}
                </div>
        )
    }
}

export default ParentSideComponent