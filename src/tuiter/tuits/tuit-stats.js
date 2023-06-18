import React from "react";
import * as Icon from 'react-bootstrap-icons';
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";


const TuitStats = (
    {tuit} 
) => {
    const dispatch = useDispatch();
    const clickLike = () => {
        const updatedTuit = {
            ...tuit,
            likes : tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
            liked : !tuit.liked
        };
        dispatch(updateTuitThunk(updatedTuit))
    }

    const clickDislike = () => {
        const updatedTuit = {
            ...tuit,
            dislikes : tuit.disliked ? tuit.dislikes + 1 : tuit.dislikes - 1,
            disliked : !tuit.disliked
        };
        dispatch(updateTuitThunk(updatedTuit))
    }

   
    return(
        <>
            <div className="row text-secondary mt-3">
                <div className="col"><Icon.Chat/>
                    <span>     {tuit.replies}</span></div>
                <div className="col"><Icon.Repeat/>
                    <span>     {tuit.retuits}</span></div>
                <button className="col text-secondary border-0 bg-transparent text-start" onClick={clickLike}>
                    {tuit.liked && <Icon.HeartFill style={{color:"red"}}/>}
                    {!tuit.liked && <Icon.HeartFill style={{color:"gray"}} />}
                    <span>{tuit.likes}</span>
                </button>
                <button className="col text-secondary border-0 bg-transparent text-start" onClick={clickDislike}>
                    {tuit.disliked && <Icon.HandThumbsDownFill style={{color:"darkgray"}}/>}
                    {!tuit.disliked && <Icon.HandThumbsDownFill style={{color:"gray"}}/>}
                    <span>{tuit.dislikes}</span>
                </button>

                <button className="col text-secondary border-0 bg-transparent text-start">
                    <Icon.Share  />
                </button>
            </div>
        </>
    )
}
export default TuitStats;