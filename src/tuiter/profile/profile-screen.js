import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const save = () => {
        dispatch(updateUserThunk(profile));
    };

    useEffect(() => {
        async function fetchProfile() {
          const { payload } = await dispatch(profileThunk());
          setProfile(payload);
        }
    
        fetchProfile();
      }, [dispatch]);
    // const save = async () => {
    //     try {
    //         await dispatch(updateUserThunk(profile));
    //     } catch (e) {
    //         alert(e);
    //     }
    // };

    // 没看懂这里
    // fix the login and commented out
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const { payload } = await dispatch(profileThunk());
    //         setProfile(payload);
    //     }
    //     fetchData();
    // }, [dispatch]); // Add dispatch as a dependency because you're using it inside the useEffect hook

    // const handleLogout = async () => {
    //     await dispatch(logoutThunk());
    //     navigate("../login");
    // };

    return (
        <div>
            <h1>Profile Screen</h1>
            {profile && (<div>
                <div>
                    <label>First Name</label>
                    <input type="text" value={profile.firstName}
                            onChange={(event) => {
                            const newProfile = {
                                ...profile, firstName: event.target.value,
                            };
                    setProfile(newProfile);
                    }}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={profile.lastName}
                        onChange={(event) => {
                        const newProfile = {
                        ...profile, lastName: event.target.value,
                        };
                        setProfile(newProfile);
                        }}/>
                </div>
            </div>
         )}
        <button
            onClick={() => {
            dispatch(logoutThunk());
            navigate("../login");
            }}>                   
            Logout</button>
        <button 
            onClick={save}>Save  </button>
    </div>
    );
}
export default ProfileScreen;
//     return (
//         <div>
//             <h1>Profile Screen</h1>
//             {profile && currentUser && (
//                 <div>
//                     <div>
//                         <label>First Name</label>
//                         <input 
//                             className="form-control"
//                             type="text" 
//                             value={profile.firstName}
//                             onChange={(event) => {
//                                 const newProfile = {...profile, firstName: event.target.value};
//                                 setProfile(newProfile);
//                             }}
//                         />
//                     </div>
//                     <div>
//                         <label>Last Name</label>
//                         <input
//                             className="form-control" 
//                             type="text" 
//                             value={profile.lastName}
//                             onChange={(event) => {
//                                 const newProfile = {...profile, lastName: event.target.value};
//                                 setProfile(newProfile);
//                             }}
//                         />
//                     </div>
//                     <button className="btn btn-primary mt-2 btn-danger" onClick={handleLogout}>
//                         Logout
//                     </button>
//                     <button className="btn btn-primary mt-2" onClick={save}>
//                         Save
//                     </button>
//                 </div> 
//             )}
//         </div>
//     );
// }
