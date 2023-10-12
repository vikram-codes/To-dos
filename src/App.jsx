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
  return (
    <>
      <h3 className="add-form">What you want to add 🤔</h3>
    </>
  );
}

function PackingList() {
  return (
    <>
      <ul className="list">
        {inititalItems.map((i) => (
          <Item item={i} key={i.id} />
        ))}
      </ul>
    </>
  );
}

function Item({ item }) {
  return <li>{item.description}</li>;
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
