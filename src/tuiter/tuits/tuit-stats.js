// 不太会写redux
import React from "react";
import * as Icon from 'react-bootstrap-icons';
import { updateTuitThunk } from "../services/tuits-thunks";
// import { updateLike} from "../reducers/tuits-reducer";
import { useDispatch } from 'react-redux';

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const heartIcon = tuit.liked ? "fas fa-heart liked" : "fas fa-heart";   // 定义heart icon
    // const updateLikeHandler = () =>{dispatch(updateLike(tuit._id));};       //dispatch the action with the id of the tuit
    const thumbsDownIcon = tuit.disliked ? "fas fa-thumbs-down disliked" : "fas fa-thumbs-down"; // dislike icon

    return(
        <>
            <div className="row text-secondary mt-3">
                <div className="col-2">
                    <Icon.Chat/>
                    <span> {tuit.replies}</span>
                </div>

                <div className="col-2">
                    <Icon.Repeat/>
                    <span> {tuit.retuits}</span>
                </div>
                
                <div className="col-2">
                    <div><i className={heartIcon} 
                            onClick={() => {
                            dispatch(updateTuitThunk({ ...tuit, "liked": true, "likes": tuit.likes + 1}))
                        }}></i> {tuit.likes}
                    </div>

                    {/* <div onClick = {updateLikeHandler}>
                        {tuit.liked ? <Icon.HeartFill style = {{color:"red"}}/> : <Icon.HeartFill />}
                    {/* {tuit.liked && <Icon.HeartFill style={{color:"red"}}/>}
                    {!tuit.liked && <Icon.HeartFill  />}  
                    </div> 
                    <span> {tuit.likes}</span> */}
                </div>
        
                {/* 6.5 Exercises: Dislikes */}
                <div className="col-2">
                    <div><i className={thumbsDownIcon} 
                            onClick={() => {
                            dispatch(updateTuitThunk({ ...tuit, "disliked": true, "dislikes": tuit.dislikes + 1 }))
                        }}></i> {tuit.dislikes}</div>
                </div>

                <button className="col-2 text-secondary border-0 bg-transparent text-start">
                    <Icon.Share/>
                </button>
            </div>
        </>
    )
}
export default TuitStats;
