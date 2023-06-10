import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import * as Icon from "react-bootstrap-icons";

const TuitItem = ({tuit})=>{
    const dispatch = useDispatch();             // get dispatch
    const deleteTuitHandler = (id) => {         // handle delete event 
        dispatch(deleteTuit(id));               // pass tuit's ID to reducer
    }
    return (
        <li className = "list-group-item">
            <div className = "col-auto">
                <img width = {50} className = "float-end rounded-circle" src = {tuit.image} /> 
            </div>
            <div className="col-10">
                <div>
                    <Icon.X className = "bi bi-x-lg float-end"      // X icon calls delete tuit // handler when clicked
                            onClick = {() => deleteTuitHandler(tuit._id)}/> 
                        <div className = "fw-bold">{tuit.userName}</div>
                        <i className = "bi bi-check-circle-fill text-primary"></i>
                        <span className="fw-normal text-secondary"> {tuit.handle} • {tuit.time} </span>
                </div>
                <div>{tuit.tuit}</div>
                <TuitStats tuit={tuit}/>
            </div>
        </li>
    );
}
export default TuitItem;