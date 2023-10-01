import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import { Fragment } from "react";
import {
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTable,
  CTableBody,
} from "@coreui/react";

function TodoList() {
    const navigate = useNavigate();
    const navigateToCreateTask=()=>{
        navigate('/createNewTask');
    }
    const navigateToUpadteTask=()=>{

console.log('State while navigating to Update Task',data.title)
        navigate('/updateTask',{state :{id:data.id}});
    }
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/todos`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        setData(data);
      });
  },[]);
//   const addTasks=()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foofred',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));



// }
const deleteTask=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
}).then((response) =>response.json())
.then((json)=>{
    alert('This task has been deleted');
     console.log(json)
}
);



}

  return (
    
    <div className="todo-list-items-container">
        <Navbar/>
         <CTable bordered="true">
            <CTableHead color="">
              <CTableRow bordered="true">
                <CTableHeaderCell scope="col" se>Task Id</CTableHeaderCell>
                <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                <CTableHeaderCell scope="col"><button onClick={navigateToCreateTask}>create task
                </button></CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
            {/* </CTable> */}
            {/* <div/>
            <div> */}
            {data.map((item) => (
            // <CTable>
            <Fragment key={item.id}>
            <CTableRow color="success" bordered="true" >
                <CTableHeaderCell scope="row">{item.id}</CTableHeaderCell>
                <CTableDataCell>{item.title}</CTableDataCell>
                <CTableDataCell>{item.completed}</CTableDataCell>
                <CTableDataCell><button onClick={deleteTask}>delete task</button>
                <button onClick={navigateToUpadteTask}>update task</button></CTableDataCell>
              </CTableRow>
             </Fragment>
            
            
              ))}
               </CTableBody>
              </CTable>
            
     
          {/* <p>{item.id}</p>
        <p>{item.title}</p>
        <p>{item.completed}</p>
         */}
          {/* </div> */}
    </div>
  );
}

export default TodoList;
