import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component"; // import component that consumes the data
import hello from "./reducers/hello";                                     // import reducer that generates the data
import todos from "./reducers/todos-reducer";                             // import the new reducer
// import {createStore} from "redux";                                        // import createStore // instead of createStore
import { configureStore } from '@reduxjs/toolkit';                        // import the configureStore function
import Todos from "./todos-component";                                    // import new component to render todos
import {Provider} from "react-redux";                                     // import Provider to deliver the data
// const store = createStore(hello);                                         // create data storage
const store = configureStore({ reducer: {hello, todos} });                // combine all reducers into a single store
                                                                            // each available through these namespaces

const ReduxExamples = () => {
  return(
    // Provider delivers data to child elements
    // component consumes the data
     // render todos component (see below)
    <Provider store={store}>                                               
        <div>
            <h2>Redux Examples</h2>
            <Todos/>                                                       
            <HelloReduxExampleComponent/>
        </div>
    </Provider>
  );
};

export default ReduxExamples;