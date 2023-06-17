import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// import { Routes, Route } from "react-router";

const NavigationSidebar = () => {
    // return null;
    const{ pathname } = useLocation();
    const[ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];
    const icons = ["fas fa-home", "fas fa-hashtag", "fas fa-bell", "fas fa-envelope", "fas fa-bookmark", "fas fa-list", "fas fa-user", "fas fa-ellipsis-h"];
    const { currentUser } = useSelector((state) => state.user);

    return (
        <div className="list-group">
            {links.map((link, index) => 
                <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                    <i className={icons[index]}></i> <span class="d-none d-xxl-inline">{link}</span>
                </Link>
            )}
            
            {!currentUser && <Link className="list-group-item text-capitalize" to="/tuiter/login">
                <i class="fa-solid fa-right-to-bracket"></i> <span class="d-none d-xxl-inline">Login</span>
            </Link>}
            
            {!currentUser && <Link className="list-group-item text-capitalize" to="/tuiter/register">
                <i class="fa-solid fa-address-card"></i> <span class="d-none d-xxl-inline">Register</span>
            </Link>}

            { currentUser && <Link className="list-group-item" to="/tuiter/profile"> 
                <i class="fa-solid fa-user"></i><span class="d-none d-xxl-inline">Profile</span> 
            </Link>}
        </div>
    );   
    // return (
    //     <div className = "list-group">
    //         <Link to={"/tuiter/home "} className={`list-group-item ${active === "home" ? "active" : ""}`}>Home</Link>
    //         <Link to={"/tuiter/explore "} className={`list-group-item ${active === "explore" ? "active" : ""}`}>Explore</Link>
    //         <Link to={"/tuiter/notifications"} className={`list-group-item ${active === "notifications" ? "active": ""}`}>Notifications</Link>
    //         <Link to={"/tuiter/messages"} className={`list-group-item ${active === "messages" ? "active": ""}`}>Messages</Link>
    //         <Link to={"/tuiter/bookmarks"} className={`list-group-item ${active === "bookmarks" ? "active": ""}`}>Bookmarks</Link>
    //         <Link to={"/tuiter/lists"} className={`list-group-item ${active === "lists" ? "active": ""}`}>Lists</Link>
    //         <Link to={"/tuiter/profile"} className={`list-group-item ${active === "profile" ? "active": ""}`}>Profile</Link>
    //         <Link to={"/tuiter/more"} className={`list-group-item ${active === "more" ? "active": ""}`}>More</Link>
    //     </div>
    // );
};
export default NavigationSidebar;
