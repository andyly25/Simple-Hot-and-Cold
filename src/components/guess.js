import React from 'react';

import GuessForm from './guess-form';
import Feedback from './feedback';

export default function Guess (props) {
  const { feedback } = props;
  return (
    <section className="child">
      <GuessForm onUserGuess={guess => props.onUserGuess(guess)}/>
      <Feedback feedback={feedback}/>
    </section>
  );
}