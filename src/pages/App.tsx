import React, { useState} from 'react';
import Form from '../components/form';
import List from '../components/list';
import Timer from '../components/timer';
import tasksInterface from '../types/tasks';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<tasksInterface[]>([]);
  const [selected, setSelected] = useState<tasksInterface>();

  function selectTask(selectedTask: tasksInterface) {
    setSelected(selectedTask);
    setTasks(olderTasks => olderTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  function endTask() {
    if(selected) {
      setTasks(olderTasks => olderTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: true,
            completed: true
          }
        }
        return task;
      }))
  }
}

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks}
        selectTask={selectTask}
      />
      <Timer
      selected={selected}
      endTask={endTask}
      />
    </div>
  );
}

export default App;