import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleCounter from './SimpleCounter'
import NumberList from './NumberList'

function App() {
  return (
    <div>
      <NumberList />
      <SimpleCounter />
    </div>
  )
}

export default App
