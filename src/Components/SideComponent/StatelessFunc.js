import React from 'react';

const StatlessFunc = (props) => {
    
    return (
        <div>
            <p>Hey there {props.word}, how's it goin? Welcome to the Make a Sentence website! Would your like a quick tutorial?</p>
            <button>Sure!</button>
            <button>I'm okay, thanks</button>
        </div>
    )
}

export default StatlessFunc