import React, { useState } from "react";
import "./index.css";
import ToDoItems from './Components/ToDoItems.jsx';

function App() {
  const [todos, setTodos] = useState([]);
  const [val, setVal] = useState("");

  function handleChange(e) {
    // console.log(val);
    setVal(e.target.value);
  }

  function update(e) {
    setTodos((preVal) => {
      return [...preVal, val];
    });

    setVal("");
  }

  function deletItems(id){
    setTodos((preVal) => {
      return preVal.filter((val, index) => { return index !== id})
    })
  }

  return (
    <div className="main">
      <h1 className="heading">TODOs</h1>

      <div>
        <div>
          <input
            type="text"
            name=""
            id=""
            value={val}
            className="input"
            placeholder="Enter todos"
            onChange={handleChange}
          />
          <button onClick={update} type="submit" className="btn">
            Add
          </button>
        </div>
        <div className="main2">
          <ul>
            {todos.map((item, index) => {
              return <ToDoItems key={index} id={index} text={item} onChecked={deletItems} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
