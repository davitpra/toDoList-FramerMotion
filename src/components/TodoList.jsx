import React from 'react'
import { TodoItem } from './TodoItem'
import { getFilteredTodos } from '../stores/util'
import { Reorder } from 'framer-motion'

export const TodoList = ({ todos, visibilityFilter, setTodos }) => (
  <>
    <Reorder.Group
      className='todo-list'
      // el eje del drag
      axis='y'
      // los valores que se van a mover
      values={todos}
      // al ordenar se dispara setTodos
      onReorder={setTodos}
    >
      {getFilteredTodos(todos, visibilityFilter).map((todo, index) => (
        <Reorder.Item
          key={todo.id}
          // el valor de la lista
          value={todo}
        >
          <TodoItem index={index} todo={todo} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  </>
)
