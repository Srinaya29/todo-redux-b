import React, { useState } from "react";
import "./User.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./userSlice";

export default function User() {
  const [userObj, setUserObj] = useState({ name: "", email: "", pass: "" });
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleAddUser = () => {
    const { name, email, pass } = userObj;

    if (!name || !email || !pass) {
      alert("Please fill all the fields");
      return;
    }

    const newUser = {
      ...userObj,
      id: Date.now(),
    };

    dispatch(addUser(newUser));
    setUserObj({ name: "", email: "", pass: "" }); // Clear form
  };

  return (
    <div className="App-Register-Row">
      <div>
        <h2>Registration Form</h2>
        <input
          type="text"
          value={userObj.name}
          onChange={(e) => setUserObj({ ...userObj, name: e.target.value })}
          placeholder="Enter name"
        />
        <input
          type="email"
          value={userObj.email}
          onChange={(e) => setUserObj({ ...userObj, email: e.target.value })}
          placeholder="Email address"
        />
        <input
          type="password"
          value={userObj.pass}
          onChange={(e) => setUserObj({ ...userObj, pass: e.target.value })}
          placeholder="New password"
        />
        <button onClick={handleAddUser}>Submit</button>
      </div>
      <div>
        <h3>User List</h3>
        <ol>
          {users &&
            users.map((value) => (
              <li key={value.id}>
                <strong>{value.name}</strong> - {value.email} - {value.pass}
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}
