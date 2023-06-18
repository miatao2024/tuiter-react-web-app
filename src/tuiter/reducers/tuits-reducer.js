// 3.2 Re-implement the TuitSummaryList component to use Redux
import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {createTuitThunk, deleteTuitThunk, updateTuitThunk, findTuitsThunk} from "../services/tuits-thunks";    // import the thunks

const initialState = {      // initial state has
    tuits: [],              // no tuits
    loading: false          // loading flag to display spinner
 }
 

const currentUser = {       // create an object that represents the currently
    "userName": "NASA",     // logged in user which contains profile information
    "handle": "@nasa",      // such as username, their avatar logo, and handle.
    "image": "../../images/NASA.png",    // Later this will come from users login in
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
    initialState,                               // same as "initialState": initialState
    extraReducers: {                            // define asynchronous reducers
        [createTuitThunk.fulfilled]:            // when server responds
            (state, { payload }) => {           // payload contains new tuit
                state.loading = false           // clear loading flag
                state.tuits.push(payload)       // append new tuit to tuits array
            },                                  // we're ignoring pending and rejected thunks

        [findTuitsThunk.pending]:               // if request is not yet fulfilled …
            (state) => {
                state.loading = true            // set loading true so UI can display spinner
                state.tuits = [] 
            },                                  // empty tuits since we are still fetching them
        [findTuitsThunk.fulfilled]:             // when we get response, request is fulfilled
            (state, { payload }) => {           // we extract/destruct payload from action object
                state.loading = false           // turn off loading flag since we have the data
                state.tuits = payload 
            },                                  // payload has tuits from server and update redux state
        [findTuitsThunk.rejected]:              // if request times out, or responds with error
            (state, action) => {
                state.loading = false           // reset loading flag
                state.error = action.error      // report error
            },

        [updateTuitThunk.fulfilled]:            // when server update is done
            (state, { payload }) => {           // payload contains updated tuit
              state.loading = false             // clear loading flag
              const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)   // find index of updated tuit in array
              state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }        // merge old tuit with updated tuit
            },
          
        [deleteTuitThunk.fulfilled]:            // handle successful response server response successful
            (state, { payload }) => {           // payload from action contains tuit ID to remove, turn off loading flag
                state.loading = false           // filter out tuit whose ID matches tuit to remove, we're ignoring pending and
                state.tuits = state.tuits .filter(t => t._id !== payload)
        },                                      // rejected thunks
    },
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
});                           // we're not going to use the old reducers anymore
        


export const {updateLike, createTuit, deleteTuit} = tuitsSlice.actions;  // export reducer function          // export reducer function
export default tuitsSlice.reducer;