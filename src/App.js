import logo from './logo.svg';
import React from 'react';
import './App.css';
import TablePage from './pages/TablePage ';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/table" element={<TablePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
}

export default App;
