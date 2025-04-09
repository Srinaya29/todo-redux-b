import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="App-Header-Row">
      <div>
        <h1>My Redux App</h1>
      </div>
      <div>
        <ul>
          <li className="menu">Home</li>
          <li className="menu">Login</li>
        </ul>
      </div>
    </div>
  );
}
