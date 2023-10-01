import CreateTask from "./CreateTask";
import TodoList from "./TodoList";
import { Routes, Route } from "react-router-dom";
import UpdateTask from "./UpdateTask";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={TodoList} />
        <Route exact path="/createNewTask" Component={CreateTask}/>
        <Route exact path="/updateTask" Component={UpdateTask}/>
      </Routes>
      {/* <Navbar/>
      <TodoList/> */}
    </div>
  );
}

export default App;
