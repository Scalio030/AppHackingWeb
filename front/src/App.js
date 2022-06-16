import React from "react";
import './assets/scss/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";


const App = () => {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
