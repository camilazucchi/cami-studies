import React from 'react';
import Form from '../components/form';
import List from '../components/list';
import Timer from '../components/timer';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Timer />
    </div>
  );
}

export default App;