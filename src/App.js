import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import PostPage from "./pages/PostPage.js";
import Navbar from "./components/Navbar";
import PostDetails from "./components/PostDetails.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
