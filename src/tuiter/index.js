import React from 'react';
import { Routes, Route } from "react-router";
import {Link} from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from './navigation-sidebar/index';
import HomeScreen from './home/home-screen';
import ExploreScreen from './explore-screen/index';
import BookmarksScreen from './bookmarks/bookmarks-screen';
import ProfileScreen from './profile/profile-screen';
// import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list/index";


function Tuiter() {
    return(
       <div>
         <Nav/>

         <div className="row">
            <div className="col-2 col-xl-2 col-lg-1 col-md-2">
               <NavigationSidebar/>
            </div>

            <div className="col-7 col-xl-6 col-lg-7 col-md-10">   
               <Routes>
                  <Route path="/home" element={<HomeScreen/>} />
                  <Route path="/explore-screen" element={<ExploreScreen/>} />
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
    );
 }
 export default Tuiter