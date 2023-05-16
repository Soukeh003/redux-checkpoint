import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import {useSelector} from 'react-redux'

function App() {
  const tasks = useSelector(state => state.taskReducers.tasks)
  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddTask />
      <ListTask tasks={tasks} />
    </div>
  );
}

export default App;
