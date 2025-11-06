import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleClassComponents from './components/SimpleClassComponents.jsx'
import SimpleFunctionalComponent from './components/SimpleFunctionalComponent.jsx'

const Student = {
  id: 1,
  name: "John"
}

const Teacher = {
  id2: 101,
  name2: "Jane"
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleClassComponents />
      <SimpleFunctionalComponent student={Student} teacher={Teacher} />
    </>
  )
}

export default App
