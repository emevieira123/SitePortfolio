import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sections } from './components/Sections';

export function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Sections />} path="/" />
      </Routes>
    </Router>
  );
}