import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import UserCards from './pages/Users';
import AboutUs from './pages/AboutUs';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/register" exact component={Register} />
      <Route path="/users" exact component={UserCards} />
      <Route path="/about-us" exact component={AboutUs} />
    </BrowserRouter>
  );
}
