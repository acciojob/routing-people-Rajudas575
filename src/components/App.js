
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails"
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
      <Router>
        <div>
          <h1>User Management</h1>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/users/:id" element={<UserDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
