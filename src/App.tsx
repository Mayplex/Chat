import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FriendsBlock from "./components/FriendsBlock";
import MyProfile from "./components/MyProfile";
import UserProfile from "./components/UserProfile";
import { ContextProvider, Context } from "./components/Context";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile/me" element={<MyProfile />} />
          <Route path="/friends" element={<FriendsBlock />} />
          <Route path="/profile/user" element={<UserProfile />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}
export default App;
