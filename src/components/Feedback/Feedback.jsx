import { Component } from "react";

export class Feedback extends Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    handleClick(key) {
        console.log("Good was clicked")
        this.setState(prevState => {
            const value = prevState[key]
                        console.log(prevState);
            return {
                [key]: value +1,
            }
        })
    }

    render() {
         const {good, neutral, bad} = this.state
        return (
            <>
                <h2>Please leave feedback</h2>
                {Object.keys(this.state).map(key => (
                    <button key={key} onClick={() => this.handleClick(key)}>{ key}</button>

                ))}

                <h2>Statictics</h2>
                <p>Good:<span>{good}</span></p>
                <p>Neutral:<span>{neutral}</span></p>
                <p>Bad:<span>{bad}</span></p>

            </>
        )
    }
}