// 2.4 Create a Hello World Redux component

import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    // const message = useSelector((hello) => hello.message);
    const message = useSelector((state) => state.hello.message);
    return(<h1>{message}</h1>);
};
export default HelloReduxExampleComponent;