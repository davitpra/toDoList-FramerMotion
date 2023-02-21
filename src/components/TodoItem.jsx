import React, { useState } from 'react'
import classnames from 'classnames'
import { TodoTextInput } from './TodoTextInput'
import { useTodo } from '../useTodo'
import { motion } from 'framer-motion'

// se crean las variables de animacion
const variants = {
  hidden: {
    opacity: 0
  },
  // se da un valor dinamico al delay
  visible: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 1
    }
  })
}

export const TodoItem = ({ index, todo }) => {
  const [editing, setEditing] = useState(false)

  const dispatch = useTodo()[1]

  const editTodo = (id, text) =>
    dispatch({
      type: 'EDIT_TODO',
      payload: {
        id,
        text
      }
    })
  const deleteTodo = (id, text) =>
    dispatch({
      type: 'DELETE_TODO',
      payload: {
        id,
        text
      }
    })
  const completeTodo = (id, text) =>
    dispatch({
      type: 'COMPLETE_TODO',
      payload: {
        id,
        text
      }
    })

  const handleDoubleClick = () => setEditing(true)

  const handleSave = (id, text) => {
    if (text.length === 0) {
      deleteTodo(id)
    } else {
      editTodo(id, text)
    }
    setEditing(false)
  }

  return (
    <motion.div
      className={classnames({
        completed: todo.completed,
        editing
      })}
      // se hace el calculo del valor dinámico
      custom={{ delay: (index + 1) * 0.1 }}
      initial='hidden'
      // se añade el valor de las animaciones
      animate='visible'
      // al salir se activa la animacion hidden.
      exit='hidden'
      // se añade las variantes
      variants={variants}
      layoutId={todo.id}
    >
      {editing
        ? (
          <TodoTextInput
            text={todo.text}
            editing={editing}
            onSave={text => handleSave(todo.id, text)}
          />
          )
        : (
          <div className='view'>
            <input
              className='toggle'
              type='checkbox'
              checked={todo.completed}
              onChange={() => completeTodo(todo.id)}
            />
            <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ cursor: 'pointer', scale: 1.5 }}
              type='button'
              className='destroy'
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
          )}
    </motion.div>
  )
}
