import React, {Component} from 'react';
import axios from 'axios';

class ScenarioDisplay extends Component {
    constructor(){
        super();
        this.state = {
            strToDisplay: '',
            curStr: '',
            curIndex: 0,
            totalNumber: 5-1,
        };
        
    };
    
    handleDivButtonClick(){
        axios.get(`/api/info`).then(response=>{
            this.setState({
                curStr: `
                    ${response.data[this.state.curIndex].senPartOne} 
                    ${response.data[this.state.curIndex].wordHolderOne} 
                    ${response.data[this.state.curIndex].senPartTwo} 
                    ${response.data[this.state.curIndex].wordHolderTwo} 
                    ${response.data[this.state.curIndex].senPartThree} 
                    ${response.data[this.state.curIndex].wordHolderThree}
                    ${response.data[this.state.curIndex].senPartFour}
                    ${response.data[this.state.curIndex].wordHolderFour}
                    ${response.data[this.state.curIndex].senPartFive}`
            })
        })
    }

    nextButton(){
        if(this.state.curIndex<this.state.totalNumber){
            this.setState({
                curIndex: this.state.curIndex+1
            })
        }else{
            this.setState({
                curIndex: 0
            })
        }
        this.handleDivButtonClick()
        let objOfTheBody = {
            index: this.state.curIndex
        }
        axios.put(`/api/moreinfo`, objOfTheBody)
    }
    
    render(){
        return(
            <div className='scenario-display'>
                {
                    this.state.curStr.length ? (
                        <div>
                            <p>{this.state.curStr}</p>
                            <button onClick={()=>this.nextButton()}>Next</button>
                            <button onClick={()=>this.handleDivButtonClick()}>Create</button>
                        </div>
                    ) : (
                        <div>
                            <button className="button-div-one" onClick={()=>this.handleDivButtonClick()}>
                                <h2>Get Sentence</h2> 
                            </button>
                        </div>
                    )
                }
            </div> 
        );
    };
};

export default ScenarioDisplay

// class ScenarioDisplay extends Component {
//     constructor(){
//         super();
//         this.state = {
//             messageFromResponse: []
//         };
//         // this.handleGettingMessages = this.handleGettingMessages.bind( this );
//     };
    
//     // componentDidMount(){
//     //     axios.get(`/api/info`).then(response=>{
//     //         this.setState({
//     //             messageFromResponse: response.data
//     //         })
//     //     })
//     //     console.log(this.state.messageFromResponse)
//     // }

    
//     componentDidMount(){
//         axios.get(`/api/info`).then(response=>{
//             this.setState({
//                 messageFromResponse: response.data
//             })
//         })
//         console.log(this.state.messageFromResponse)
//     }

    

//     handleGettingMessages(){
//         axios.get(`/api/info`).then(response=>{
//             this.setState({
//                 messageFromResponse: response.data
//             })
//         })
//         console.log(this.state.messageFromResponse)
//     }
 
//     render(){
//         let mapped = this.state.messageFromResponse.map((element)=>{
//             return (
//                 <p>{element}</p>
//             )
//         })
//         console.log(this.state.messageFromResponse)
//         return(
//             <div className='scenario-display'>
//                 {/* <button className="scenario-display-button" onClick={this.handleGettingMessages}>Get</button> */}
//                 <p>{mapped}</p>
//             </div>
//         );
//     };
// };