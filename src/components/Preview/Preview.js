import React from 'react';

import './Preview.css';

export default function Preview({ title, subTitle, font, align, text }) {
  return (
    <div className={`preview ${font}`} style={{ textAlign: `${align}` }}>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <p>{text}</p>
    </div>
  );
}
