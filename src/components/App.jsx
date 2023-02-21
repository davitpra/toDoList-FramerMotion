import React from 'react'
import Header from './Header'
import MainSection from './MainSection'
import { reducer } from '../stores/reducer'
import { TodoProvider } from '../TodoProvider'

const initialState = {
  todos: [
    {
      text: 'React Native',
      completed: false,
      id: 'b967afe24b23'
    },
    {
      text: 'Learn how to animate with React',
      completed: true,
      id: '43286487fhsdjasd'
    },
    {
      text: 'Oraaaleeee!',
      completed: false,
      id: '54937fhajd'
    },
    {
      text: 'Try to move the items',
      completed: true,
      id: '43242341aaaaa'
    },
    {
      text: 'Wooow! I love it',
      completed: true,
      id: 'b967afe24a13'
    }
  ],
  visibilityFilter: 'All'
}
const App = () => (
  <TodoProvider initialState={initialState} reducer={reducer}>
    <div>
      <Header />
      <MainSection />
    </div>
  </TodoProvider>
)

export default App
