import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import DetailedView from './components/detailed-view';
import InfoMore from './components/info-more';




ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path=":id" element={<DetailedView />}>
        <Route path=":info" element={<InfoMore />}/>
    </Route>

  </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')
);