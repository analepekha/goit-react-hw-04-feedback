import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
   state = {
        good: 0,
        neutral: 0,
        bad: 0
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

  onLeaveFeedback = propName => {
    this.setState(prevState => {
      const value = prevState[propName];
      return {
        [propName]: value + 1,
      };
    });
  };
  
  render() {
     const { good, neutral, bad } = this.state
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage("good");
    return(
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {!total ? (<Notification message={"There is no feedback :("} />) : (
          <Section title={"Statistics"}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage ? positivePercentage : 0} />
          </Section>
        )}
      </div>
    )
  }
};
