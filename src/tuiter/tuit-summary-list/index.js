import React from "react";
// import tuitsArray from './tuits.json';               // replace getting tuits from a file
import TuitSummaryItem from "./tuit-summary-item";
import {useSelector} from "react-redux";                // to getting tuits from the store

const TuitSummaryList = () => {
    const { tuits } = useSelector(state => state.tuits)     // destruct tuits from the state in the store
    return(
        <ul className="list-group"> {
            tuits.map(tuit => <TuitSummaryItem 
                    key={tuit._id} 
                    tuit={tuit} />)
            }
        </ul>
    );
};
export default TuitSummaryList;