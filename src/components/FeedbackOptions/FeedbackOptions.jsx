import { Component } from "react";
import {Title, Button, Statistics, List, Item} from './FeedbackOptions.styled'

export class FeedbackOptions extends Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    onLeaveFeedback(propName) {
        console.log("Btn was clicked")
        this.setState(prevState => {
            const value = prevState[propName]
            return {
                [propName]: value +1,
            }
        })
    }

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }
    
    countPositiveFeedbackPercentage(propName) {
         const total = this.countTotalFeedback();
        if (!total) {
            return;
        }
        const value = this.state[propName];
        const result = (value / total) * 100;
        return Number(result.toFixed(2));

    }

    render() {
        const { good, neutral, bad } = this.state
        const total = this.countTotalFeedback();
        const percentage = this.countPositiveFeedbackPercentage("good");
        return (
            <>
                <Title>Please leave feedback</Title>
                {Object.keys(this.state).map(propName => (
                    <Button key={propName} onClick={() => this.onLeaveFeedback(propName)}>{ propName}</Button>

                ))}

                <Statistics>Statictics</Statistics>
                <List>
                    <Item>Good: { good}</Item>
                    <Item>Neutral: {neutral}</Item>
                    <Item>Bad: {bad}</Item>
                    <Item>Total: {total}</Item>
                    <Item>Positive feedback: {percentage ? percentage : 0}%</Item>
                </List>
            </>
        )
    }
}