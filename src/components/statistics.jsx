import React from "react";
import PropTypes from 'prop-types';
import { Notification } from './notification';
import css from './statistics.module.css';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="statistic">
      <h2 className={css.title}>Statistic</h2>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <ul className={css.statictic__list}>
          <li className={css.statistic__item}>Good: {good}</li>
          <li className={css.statistic__item}>Neutral: {neutral}</li>
          <li className={css.statistic__item}>Bad: {bad}</li>
          <li className={css.statistic__item}>Total: {total}</li>
          <li className={css.statistic__item}>
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      )}
    </div>
  );
};

  Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
  };
