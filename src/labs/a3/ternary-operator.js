// A conditional expression that evaluates to true or false followed by a question mark ( ? )
// An expression that evaluates if the conditional is true followed by a colon ( : )
// Followed by an expression that evaluates if the conditional is false

import React from 'react';
function TernaryOperator(){

    let loggedIn = true;
    return(
        <div>
            <h2> Logged In</h2>
            { loggedIn ? <p>Welcome</p> : <p>Please login</p>}
        </div>
    )
}
export default TernaryOperator;