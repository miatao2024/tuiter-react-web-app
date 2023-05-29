import React from 'react';
import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
import BooleanVariables from"./BooleanVariables";
import IfElse from"./if-else";
import TernaryOperator from './ternary-operator';
import WorkingWithFunctions from './WorkingWithFunctions';
function JavaScript() {
    console.log('Hello World!');
    return (
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperator/>
            <WorkingWithFunctions/>
        </div>
    );
}
export default JavaScript