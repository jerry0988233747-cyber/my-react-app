import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function addTask() {
    if (input === "") {
      alert("請輸入待辦事項！");
      return;
    }
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  }

  function toggleDone(index) {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div>
      <h1>待辦清單</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="輸入待辦事項..."
      />
      <button onClick={addTask}>新增</button>

      {tasks.map((task, index) => (
        <div key={index}>
          <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
            {task.text}
          </span>
          <button onClick={() => toggleDone(index)}>
            {task.done ? "取消" : "完成"}
          </button>
          <button onClick={() => deleteTask(index)}>刪除</button>
        </div>
      ))}
    </div>
  );
}

export default App;