// 不太会写redux
import React from "react";
import * as Icon from 'react-bootstrap-icons';
import { updateLike} from "../reducers/tuits-reducer";
import { useDispatch } from 'react-redux';

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const updateLikeHandler = () =>{dispatch(updateLike(tuit._id));}; // // dispatch the action with the id of the tuit
    return(
        <>
            <div className="row text-secondary mt-3">
                <div className="col-3">
                    <Icon.Chat/>
                    <span> {tuit.replies}</span>
                </div>

                <div className="col-3">
                    <Icon.Repeat/>
                    <span> {tuit.retuits}</span>
                </div>
                
                <div className="col-3">
                    <div onClick = {updateLikeHandler}>
                        {tuit.liked ? <Icon.HeartFill style = {{color:"red"}}/> : <Icon.HeartFill />}
                    {/* {tuit.liked && <Icon.HeartFill style={{color:"red"}}/>}
                    {!tuit.liked && <Icon.HeartFill  />}  */}
                    </div>

                    <span> {tuit.likes}</span>
                </div>
        
                <button className="col-3 text-secondary border-0 bg-transparent text-start">
                    <Icon.Share/>
                </button>
            </div>
        </>
    )
}
export default TuitStats;
