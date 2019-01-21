import React, {Component} from 'react';
import axios from 'axios';

class ButtonX extends Component {
    constructor(){
        super()
        this.state = {
            buttonXClicked: false,
            whatTheHeckMessage: ''
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
    
    render(){
        return(
            <div>
                {this.state.buttonXClicked ? (
                    <div className="button-x">
                        <div>
                            <h3 className="warning">WARNING:</h3>
                            <h5 className="warning">This button was built specifically to meet the projects delete requirement. Functionality was NOT taken into consideration during the construction of this button. Pressing yes will break this site.</h5>
                            <h5 className="warning">Are you sure you want to continue?</h5>
                            <button onClick={()=>this.theyClickedButtonX()}>Yes</button>
                            <button onClick={()=>this.changeButtonX()}>No</button>
                        </div>
                    </div>
                ) : (
                    <div className="button-x">
                        <button onClick={()=>this.changeButtonX()}>button X</button>
                    </div>
                )
                }
            </div>
        )
    }
}

export default ButtonX