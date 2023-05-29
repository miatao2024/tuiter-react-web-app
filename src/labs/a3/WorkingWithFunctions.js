// 2.2.6 Working with functions
// function <functionName> (<parameterList>) { <functionBody> }
import React from 'react';
import ArrowFunctions from './arrow-functions';
import ImpliedReturn from './implied-return';
import Es5Functions from './es5-function';
import FunctionParenthesisAndParameters from './function-parenthesis-and-parameters';
    // FunctionParenthesisAndParameters();
    function WorkingWithFunctions() {
    return (
        <div>  
            <Es5Functions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <FunctionParenthesisAndParameters/>
        </div>
    );

}
export default WorkingWithFunctions;