import React, { useState} from 'react';
import Form from '../components/form';
import List from '../components/list';
import Timer from '../components/timer';
import tasksInterface from '../types/tasks';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<tasksInterface[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Timer />
    </div>
  );
}

export default App;