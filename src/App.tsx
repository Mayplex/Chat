import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FriendsBlock from "./components/FriendsBlock";
import MyProfile from "./components/MyProfile";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/me" element={<MyProfile />} />
        <Route path="/friends" element={<FriendsBlock />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
