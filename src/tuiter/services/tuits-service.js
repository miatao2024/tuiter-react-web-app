import axios from 'axios';                              // import axios
const TUITS_API = 'http://localhost:4000/api/tuits';    // location of HTTP services

       

// 6.3 Posting data to a RESTful Web server API from React
export const createTuit = async (tuit) => {             // implement this in following sections
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}
   
export const findTuits = async () => {                  // async tags this function as asynchronous
    const response = await axios.get(TUITS_API);        // send HTTP GET request to TUITS_API
    const tuits = response.data;                        // extract JSON array from response from server
    return tuits;                                       // return tuits
}
   
// 6.2 Deleting data from a RESTful Web server API from React
export const deleteTuit = async (tid) => {                      // send HTTP DELETE request to server
    const response = await axios.delete(`${TUITS_API}/${tid}`)  // append tuit's ID to URL
    return response.data                                        // data contains response's status we'll ignore
}                                                               // for now

// 6.4 Updating data in a RESTful Web server API from React
export const updateTuit = async (tuit) => {                                 // service function accepts tuit to send server
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);     // send HTTP PUT request appending tuit's ID to URL, and embed tuit object in BODY
    return tuit;                                                            // return tuit update to update in reducer's state's store
}
  