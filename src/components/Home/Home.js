import React from 'react';
import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [font, setFont] = useState('');
  const [align, setAlign] = useState('');
  const [text, setText] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subTitle={subTitle} font={font} align={align} text={text} />
      <Editor
        setTitle={setTitle}
        setSubTitle={setSubTitle}
        setFont={setFont}
        setAlign={setAlign}
        setText={setText}
      />
    </main>
  );
}
