import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Todo() {
    const todos = useSelector( state => state.todo )
  return (
    <h1>Todo List</h1>
  );
}
