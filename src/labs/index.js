import React from 'react';
import Assignment3 from './a3';
import {Link} from "react-router-dom";
import Nav from "../nav";


function Labs() {
    return(
       <div>
          {/* <h1>Assignment 3</h1> */}
         {/* <Link to="/labs/a3">A3</Link> |
         <Link to="/hello">Hello</Link> |
         <Link to="/tuiter">Tuiter</Link> */}
         <Nav/>
         <Assignment3/>
       </div>
    );
 }
 export default Labs;