// import { useState } from "react";
import "./App.css";

const inititalItems = [
  { id: 1, description: "Code", hours: 3, done: false },
  {
    id: 2,
    description: "Gym",
    hours: 2,
    done: false,
  },
];

function App() {
  return (
    <>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </>
  );
}

function Logo() {
  return (
    <>
      <h1 className="logo">To Do&apos;s List 😡</h1>
    </>
  );
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What you want to add 🤔</h3>
      <select>
        <option value="" disabled selected>
          Select Hours...
        </option>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="What to do..."></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {inititalItems.map((i) => (
          <Item item={i} key={i.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.done ? { textDecoration: "line-through" } : {}}>
        {item.hours} {item.description}
        <button>❌</button>
      </span>

      <button>&times;</button>
    </li>
  );
}

function Stats() {
  return (
    <>
      <footer className="stats">
        <em>You have completed of your tasks</em>
      </footer>
    </>
  );
}

export default App;
