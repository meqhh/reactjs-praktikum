import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import StoreAPI from "./StoreAPI";
import Cuaca from "./Cuaca";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/storeapi" element={<StoreAPI />} />
        <Route path="/cuaca" element={<Cuaca />} />
      </Routes>
    </Router>
  );
}

export default App;
