import React, {Component} from 'react';
import axios from 'axios';

class ButtonX extends Component {
    constructor(){
        super()
        this.state = {
            buttonXClicked: false,
            whatTheHeckMessage: '',
            yes: 'Yes'
        }
    }

    changeButtonX(){
        this.setState({
            buttonXClicked: !this.state.buttonXClicked
        })
    }

    theyClickedButtonX(){
        axios.delete(`/api/protocol/x`)
    }

    changeYes(){
        this.setState({
            yes: "DON'T DO IT"
        })
    }
    
    render(){
        return(
            <div>
                {this.state.buttonXClicked ? (
                    <div className="button-x">
                        <div>
                            <h3 className="warning">WARNING:</h3>
                            <h5 className="warning">This button was built specifically to meet the projects delete requirement. Functionality was NOT taken into consideration during the construction of this button. Pressing yes will break this site.</h5>
                            <h5 className="warning">Are you sure you want to continue?</h5>
                            <button onClick={()=>this.changeButtonX()} className="the-button-x-no">No</button>
                            <button onClick={()=>this.theyClickedButtonX()} className="the-button-x-yes" onMouseOver={()=>this.changeYes()}>{this.state.yes}</button>
                        </div>
                    </div>
                ) : (
                    <div className="button-x">
                        <button onClick={()=>this.changeButtonX()} className="the-button-x">Button X</button>
                    </div>
                )
                }
            </div>
        )
    }
}

export default ButtonX