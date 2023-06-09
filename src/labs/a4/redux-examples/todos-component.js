// 2.6 Working with forms and local state

import React, {useState} from "react";                      // import useState to work with local state
import {useDispatch, useSelector} from "react-redux";       // import useSelector // useDispatch hook to call reducers // useDispatch hook to call reducers
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";           // import reducer function exported by todos-reducer
// import a new deleteTodo reducer function
// import reducer function implemented below

const Todos = () => {

    const [todo, setTodo] = useState({do: ''});             // create todo local state variable
    const todos = useSelector(state => state.todos);  
    const dispatch = useDispatch();                         // get distacher to invoke reducer functions
    
    const toggleTodoDone = (todo) => {                      // handle checkbox click event, accept todo index
        dispatch(todoDoneToggle(todo))                      // send index to reducer function passing index
    }                                                       // of todo to toggle done field
     
    const deleteTodoClickHandler = (index) => {             // handle delete button click, accepts todo index
        dispatch(deleteTodo(index))                         // dispatch event to deleteTodo reducer function
    }                                                       // passing index of todo we want to delete
       
    const createTodoClickHandler = () => {                  // handle click event of button
        dispatch(addTodo(todo))                             // call reducer function passing new todo as the payload in the action object and
        setTodo({do: ''})                                   // then clear local todo state variable
    }
    
    const todoChangeHandler = (event) => {                  // handle keystroke changes in input field
        const doValue = event.target.value;                 // get data from input field
        const newTodo = { do: doValue };                    // create new todo object instance
        // setting the todo's do property
        setTodo(newTodo);                                   // change local state todo variable
    }
      
   
    // add a new line item at the top
    // containing an input field to type todo
    // handle keystrokes to update component state
    // update field with latest state value
    return(
        <>
            <h3>Todos</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <button onClick={createTodoClickHandler} // new button to add new todo // calls function to handle click event
                                className="btn btn-primary w-25 
                                        float-end">
                            Create
                        </button>            
                            <input
                                onChange={todoChangeHandler}
                                value={todo.do} className="form-control"/>
                        </li>
                {
                    todos.map((todo, index) =>               // retrieve todos from reducer state and assign to // local todos constant // add index parameter
                        <li key={todo._id}
                            className="list-group-item">
                            <button onClick={() =>                      // new Delete button sends index of todo to
                                    deleteTodoClickHandler(index)}      // delete to handler. Note () => {} because
                                     // we are passing index parameter otherwise // gets into infinite loop
                                    className="btn btn-danger           
                                                float-end ms-2">       
                                Delete  
                            </button>
                        <input type="checkbox"                         // new checkbox which is checked
                                className="me-2"                        // if todo.done is true
                                checked={todo.done}
                                onChange={() =>                         // if user changes checkbox, we'll pass the
                                toggleTodoDone(todo)}                   // todo to reducer function to update todo's state
                        />
                            {todo.do}
                        </li>)
                }

                </ul>
        </>
    );
};
export default Todos;