import { useState, useEffect } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTable,
  CTableBody,
} from "@coreui/react";

function TodoList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/todos`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        setData(data);
      });
  });

  return (
    <div className="todo-list-items-container">
        
         <CTable bordered="true">
            <CTableHead color="">
              <CTableRow bordered="true">
                <CTableHeaderCell scope="col" se>Task Id</CTableHeaderCell>
                <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                <CTableHeaderCell scope="col">completed</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
            {/* </CTable> */}
            {/* <div/>
            <div> */}
            {data.map((item) => (
            // <CTable>
            
            <CTableRow color="success" bordered="true">
                <CTableHeaderCell scope="row">{item.id}</CTableHeaderCell>
                <CTableDataCell>{item.title}</CTableDataCell>
                <CTableDataCell>{item.completed}</CTableDataCell>
              </CTableRow>
             
            
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
