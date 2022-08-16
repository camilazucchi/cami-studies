import React, { useState} from 'react';
import Form from '../components/form';
import List from '../components/list';
import Timer from '../components/timer';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState([{
    task: 'React',
    time: '02:00:00'
}, {
    task: 'JavaScript',
    time: '01:00:00'
}, {
    task: 'TypeScript',
    time: '03:00:00'
}]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Timer />
    </div>
  );
}

export default App;