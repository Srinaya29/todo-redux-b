import React from "react";
import Todo from "./features/todo/Todo";
import User from "./features/user/User";
import Login from "./features/user/Login";
import Header from "./features/header/Header"
import Footer from "./features/footer/Footer"
import Home from "./features/home/Home"
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};
export default App;
