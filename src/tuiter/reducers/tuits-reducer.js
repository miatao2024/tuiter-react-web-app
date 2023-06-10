// 3.2 Re-implement the TuitSummaryList component to use Redux
import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';


const currentUser = {       // create an object that represents the currently
    "userName": "NASA",     // logged in user which contains profile information
    "handle": "@nasa",      // such as username, their avatar logo, and handle.
    "image": "NASA.png",    // Later this will come from users login in
};

const templateTuit = {          // create a template tuit object with some default                                // values and copy over the fields userName, handle and
    ...currentUser,             // values and copy over the fields userName, handle and
    "topic": "Space",           // image from the currentUser
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
   
   
const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: { tuits: tuits },
    reducers: {
        updateLike(state, action) {
            const index = state.tuits.findIndex(tuit => tuit._id === action.payload);
            state.tuits[index].liked = !state.tuits[index].liked
            if (state.tuits[index].liked) {
                state.tuits[index].likes++;
            } else state.tuits[index].likes--;
        },
        createtuit(state, action){
            state.tuits.unshift({
                ...action.payload,
                ...templateTuit,
                _id:(new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state.tuits.findIndex(        // reducer function to delete tuit looks up index of tuit from state comparing each tuit's
                tuit => tuit._id === action.payload);   // ID with action's payload, then
            state.tuits.splice(index, 1);                                            // splices tuit from state
        }
    },
});

export const {updateLike, createTuit, deleteTuit} = tuitsSlice.actions;  // export reducer function          // export reducer function
export default tuitsSlice.reducer;