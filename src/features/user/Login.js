import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateUser } from "./userSlice";
export default function () {
  const [userObj, setUserObj] = useState({});
  const [msg,setMsg] = useState()
  const dispatch = useDispatch()
  const handleSubmit = () => {
    const result = dispatch(validateUser(userObj))
    if (result) {
        setMsg("Welcome")
    }
    else {
        setMsg("Invalid User")
    }
  };
  return (
    <div>
      <h3>Login Form</h3>
      {msg}
      <p>
        <input
          placeholder="Email"
          onChange={(e) => setUserObj({ ...userObj, email: e.target.value })}
        />
      </p>

      <p>
        <input
          type="password"
          placeholder="Email"
          onChange={(e) => setUserObj({ ...userObj, pass: e.target.value })}
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
