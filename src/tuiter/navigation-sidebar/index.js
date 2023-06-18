import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Icon from 'react-bootstrap-icons';
// import 'font-awesome/css/font-awesome.min.css';
// import { Routes, Route } from "react-router";

const NavigationSidebar = () => {
    // return null;
    const{ pathname } = useLocation();
    const[ignore, tuiter, active] = pathname.split("/");
    const { currentUser } = useSelector((state) => state.user);
    // const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];
    // const icons = ["fas fa-home", "fas fa-hashtag", "fas fa-bell", "fas fa-envelope", "fas fa-bookmark", "fas fa-list", "fas fa-user", "fas fa-ellipsis-h"];

    return (
        <div className="list-group">
            <Link to={"/"} className={`list-group-item`}>
                <div className="d-none d-xl-block">
                    <Icon.Twitter/> 
                    <span style={{fontSize:16}}>Tuiter</span>
                </div>
                <div className={"d-xl-none"}><i className="bi bi-twitter  mt-1 me-1"></i></div>
            </Link>

            <Link to={"/tuiter/home "} className={`list-group-item
                    ${active === "home" ? "active" : ""} `}>
                    <Icon.House/> 
                    <span style={{fontSize:16}}>Home</span>
            </Link>

            <Link to={"/tuiter/explore "} className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}>
                    <Icon.Hash/> 
                    <span style={{fontSize:16}}>Explore</span>
            </Link>

            <Link to={"/tuiter/notifications "} className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}>
                    <Icon.Bell />
                    <span style={{fontSize:16}}>Notifications</span>
            </Link>

            <Link to={"/tuiter/messages "} className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}>
                    <Icon.Messenger/>
                    <span style={{fontSize:16}}>Messages</span>
            </Link>
            <Link to={"/tuiter/bookmarks "} className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}>
                    <Icon.Bookmark/>
                    <span style={{fontSize:16}}>Bookmarks</span>
            </Link>
            <Link to={"/tuiter/lists "} className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}>
                    <Icon.List/>
                    <span style={{fontSize:16}}>Lists</span>
            </Link>
        
        
            {currentUser && <Link to={"/tuiter/profile "} className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}>
                    <Icon.Person/>
                    <span style={{fontSize:16}}>Profile</span>
            </Link>}
        
        
        
            <Link to={"/tuiter/more "} className={`list-group-item
                    ${active === "more" ? "active" : ""}`}>
                    <Icon.ThreeDots/>
                    <span style={{fontSize:16}}>More</span>
            </Link>

            {!currentUser && <Link to={"/tuiter/login "} className={`list-group-item
                        ${active === "login" ? "active" : ""}`}>
                        <Icon.PersonBadge/>
                        <span style={{fontSize:16}}>LogIn</span>
            </Link>}
        
            {!currentUser && <Link to={"/tuiter/register "} className={`list-group-item
                        ${active === "register" ? "active" : ""}`}>
                        <Icon.PersonAdd/>
                        <span style={{fontSize:16}}>Register</span>
            </Link>}

        </div>
    );
};
export default NavigationSidebar;
    //     <div className="list-group">
    //         {links.map((link, index) => 
    //             <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
    //                 <i className={icons[index]}></i> <span class="d-none d-xxl-inline">{link}</span>
    //             </Link>
    //         )}
            
    //         {!currentUser && <Link className="list-group-item text-capitalize" to="/tuiter/login">
    //             <i class="fa-solid fa-right-to-bracket"></i> <span class="d-none d-xxl-inline">Login</span>
    //         </Link>}
            
    //         {!currentUser && <Link className="list-group-item text-capitalize" to="/tuiter/register">
    //             <i class="fa-solid fa-address-card"></i> <span class="d-none d-xxl-inline">Register</span>
    //         </Link>}

    //         { currentUser && <Link className="list-group-item" to="/tuiter/profile"> 
    //             <i class="fa-solid fa-user"></i><span class="d-none d-xxl-inline">Profile</span> 
    //         </Link>}
    //     </div>
    // );   
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

