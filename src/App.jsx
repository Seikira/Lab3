import React from "react";
import List from "./components/List";
import data from "./data";
import styles from './App.module.css';


function App() {
  return (
    <div>
      <header className="header">
        <img
          src="https://res.cloudinary.com/dgkpobybj/image/upload/v1737755818/globe_epo0hx.png"
          alt="Globe Icon"
          className="globe-icon"
        />
        <h1>My Travel Journal</h1>
      </header>
      <List travels={data} />
    </div>
  );
}

export default App;
