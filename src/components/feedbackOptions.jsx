import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './feedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.buttonList}>
      {options.map(option => (
        <li id ={nanoid()} >
          <button
            className={css.button__feedback}
            type="button"
            onClick={() => onLeaveFeedback({option})}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback:PropTypes.func,
};

