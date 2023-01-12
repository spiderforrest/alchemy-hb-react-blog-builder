import React from 'react';
import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subTitle={subTitle} />
      <Editor setTitle={setTitle} setSubTitle={setSubTitle} />
    </main>
  );
}
