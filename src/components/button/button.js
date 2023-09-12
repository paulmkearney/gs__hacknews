import React, { useState } from 'react';
import './button.scss';

function Button({ text, srtext }) {
  const srText = text + ' ' + srtext;
  return (
    <button type="button" className="btn__action " aria-label={srText}>
      {text}
    </button>
  );
}

export default Button;
