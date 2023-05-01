import React from 'react';

import { FeedbackOptions } from './feedbackOptions';
import { Statistics } from './statistics';
import css from './feedbackOptions.module.css';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelIncrement = ({ option }) => {
    option === 'good' &&
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    option === 'neutral' &&
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    option === 'bad' &&
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
  };

  countTotalFeedback = () => {
    let total = 0;
    for (let key in this.state) {
      total += this.state[key];
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div style={divStyles}>
        <div className={css.feedback}>
          <h2 className={css.title}>Please leave feedback</h2>
          <section title="FeedbackOptions">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.handelIncrement}
            />
          </section>
          <section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          </section>
        </div>
      </div>
    );
  }
}

const divStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
  flexDirection: 'column',
};
