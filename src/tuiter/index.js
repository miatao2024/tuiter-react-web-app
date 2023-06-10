import React from 'react';
import { Routes, Route } from "react-router";
import {Link} from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from './navigation-sidebar/index';
import HomeScreen from './home/home-screen';
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from './bookmarks/bookmarks-screen';
import ProfileScreen from './profile/profile-screen';
// import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list/index";
import whoReducer from "./reducers/who-reducer";            // import the reducer
import tuitsReducer from "./reducers/tuits-reducer";         // import the new tuits reducer
import { configureStore } from '@reduxjs/toolkit';          // import configureStore
import {Provider} from "react-redux";                       // import the Provider component
const store = configureStore(                               // configure the store
   {reducer: {who: whoReducer, tuits: tuitsReducer}});      // add it to the store

function Tuiter() {
    return(
      // provide the store to the rest of the application so it can pull from the global state
      <Provider store={store}>                               
         <div>
            <Nav/>
            <div className="row">
               <div className="col-2">
                  <NavigationSidebar/>
               </div>

               <div className="col-7">   
                  <Routes>
                     <Route path="/home" element={<HomeScreen/>} />
                     <Route path="/explore" element={<ExploreScreen/>} />
                     {/* explore-screen name of folder vs path name*/}
                     <Route path="/notifications" element={<h1>Notifications</h1>} />
                     <Route path="/messages" element={<h1>Messages</h1>} />
                     <Route path="/bookmarks" element={<BookmarksScreen/>} />
                     <Route path="/lists" element={<h1>Lists</h1>} />
                     <Route path="/profile" element={<ProfileScreen/>} />
                     <Route path="/more" element={<h1>More</h1>} />
                  </Routes>
               </div>

               <div className="col-3"> 
               {/* <div className="col-3 col-xl-4 col-lg-4 d-md-none d-sm-none">  */}
                  {/* <h1>Who to follow</h1> */}
                  {/* <WhoToFollowListItem /> */}
                     {/* <WhoToFollowListItem who={{
                     userName: "Tesla",
                     handle: "tesla",
                     avatarIcon: "tesla.png" }} />
                     <WhoToFollowListItem who={{
                     userName: "SpaceX",
                     handle: "spacex",
                     avatarIcon: "spacex.png", }} /> */}
                  <WhoToFollowList/>
               </div>
            </div>
         </div>
      </Provider>
    );
 }
 export default Tuiter