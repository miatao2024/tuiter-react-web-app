import React from 'react';
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter, Navigate} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
          {/* <HelloWorld/>
          <Labs/>
          <Tuiter/> */}

          <Routes>
            <Route path="/"         element={<Navigate to="/labs"/>}/>
            <Route path="/labs/*"   element={<Labs/>}/>
            <Route path="/hello"    element={<HelloWorld/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>
          </Routes>
          {/* To navigate between components we use the Route component from React Router to declare paths and map them to corresponding component we want to render for that path. */}
      </div>
    </BrowserRouter>
  );
} export default App;