import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sections } from './components/Sections';
import { DefaultLayout } from './shared/layouts/DefaultLayout/index';

export function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route element={<Sections />} path="/" />
        </Route>
      </Routes>
    </Router>
  );
}