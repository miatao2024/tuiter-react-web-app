// implied returns, that is, if the body of the function consists of just returning some value or expression, then the return statement is optional and can be replaced with just the value or expression.
// 还是需要写return部分！！
import React from 'react';

function ImpliedReturn() {
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return (
        <>
            <h3>Implied return</h3>
            fourTimesFive = {fourTimesFive}<br />
            multiply(4, 5) = {multiply(4, 5)}<br />
        </>
    );
}
export default ImpliedReturn;