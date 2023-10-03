import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CreateTask() {
  const { userId, setUserId } = useState("");
  const { title, setTitle } = useState("");
  const navigate = useNavigate();
  const displayValue = (event) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          id: 1,
          title: event.target[0].value,
          body: 'bar',
          userId: event.target[1].value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => alert(
            "Task Created  Title: " +
              event.target[0].value +
              "  UserId : " +
              event.target[1].value
          ));
   
    // alert(
    //   "Task Created  Title: " +
    //     event.target[0].value +
    //     "  UserId : " +
    //     event.target[1].value
    // );
    setTitle(event.target[0].value);
    setUserId(event.target[1].value);
  };
  const navigateToHome = () => {
    

    navigate("/");
  };

  return (
    <div>
      <button onClick={navigateToHome}>Home</button>
      <h1>Enter new Task Details</h1>
      <form onSubmit={displayValue}>
        <div className="div-form-field">
          <label>Enter Task Title</label>
          <input id="title" value={title} />
        </div>
        <div className="div-form-field">
          <label>Enter User Id</label>
          <input id="userID" value={userId} />
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default CreateTask;
