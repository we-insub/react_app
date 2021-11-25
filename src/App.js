import Button from "./Button"
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); // ...append 엘리멘트리에 추가하기.
    // 즉 입력값 todo가 커렌트어레이자리로오고 2번째입력한값이 다시 투두 커렌트에는
    // 처음입력한값 세번째값을 입력할경우 1,2 번째입력한값이 커렌트어레이에들어감.
    setToDo("");
  };
  console.log(toDos); // 값 체크하기위해서 작성코드
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;