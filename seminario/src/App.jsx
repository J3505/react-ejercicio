import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/SignUp';
import Inform from './pages/inform';

function App() { //defino 3 rutas y las renderizo
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/inform" element={<Inform />} />
      </Routes>
    </Router>
  );
}

export default App;
