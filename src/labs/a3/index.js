import React from 'react';
import JavaScript from './java-script';
import WorkingWithArrays from './working-with-arrays';
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from './todo/todo-item';
import TodoList from './todo/todo-list';

function Assignment3() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped,   blockScoped,
        constant1,        numberArray1,   stringArray1
    ];
    console.log('Working with Arrays');
    console.log('numberArray1 =', numberArray1);
    console.log('stringArray1 =', stringArray1);
    console.log('variableArray1 = ', variableArray1);

    return (
        <div>
            <h1>Assignment 3</h1>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <JavaScript/>
            <WorkingWithArrays/>
        </div>
    );
}
export default Assignment3;