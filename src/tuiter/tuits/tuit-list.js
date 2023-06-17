// 3.3.1 Implement TuitsList component based on TuitSummaryList
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../services/tuits-thunks";        // import the thunk

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuits)  // grab tuits and loading flag from reducer
    const dispatch = useDispatch();                             // on component load
    
    useEffect(() => {                                           // invoke find tuits thunk to fetch tuits and
        dispatch(findTuitsThunk())                              // put them in the reducer's store so we can
    }, [])                                                      // extract them with useSelector() and render
     
    return (
        <ul className="list-group">
            {loading &&                                         // if loading flag is true, then show a loading message while data is still coming back from the server
                <li className="list-group-item">                
                    Loading...
                </li>
            }
            {
                tuits.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit} />)
            }
        </ul>
    );
};
export default TuitsList;