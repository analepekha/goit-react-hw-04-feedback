import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container, FeedbackCard } from './App.styled';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
        return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = (property)=> {
         const total = countTotalFeedback();
        if (!total) {
            return;
        }
        const value = property;
        const result = (value / total) * 100;
        return Number(result.toFixed(2));
  }

  const onLeaveFeedback = propName => {
    switch (propName) {
      case "good":
        return setGood((prev) => prev + 1);
      case "neutral":
        return setNeutral((prev) => prev + 1);
      case "bad":
        return setBad((prev) => prev + 1);
      default: return;
    };
  }

  const options = { good, neutral, bad };
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(good);

  return (
    <Container>
         <FeedbackCard>
           <Section title={"Please leave feedback"}>
             <FeedbackOptions
              options={Object.keys(options)}
              onLeaveFeedback={onLeaveFeedback} />
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
          </FeedbackCard>
      </Container>
  )
}
