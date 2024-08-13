import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './utility.scss'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='fs-xs bg-black txt-white'>This is the initial setup of Reflection Design & Architect website
      আমার সোনার বাংলা</div>
      <div className='fs-s bg-white txt-black'>This is the initial setup of Reflection Design & Architect website
      আমার সোনার বাংলা</div>
      <div className='fs-regular bg-primary txt-white'>This is the initial setup of Reflection Design & Architect website
      আমার সোনার বাংলা</div>
      <div className='fs-l bg-secondary txt-black'>This is the initial setup of Reflection Design & Architect website
      আমার সোনার বাংলা</div>
      <div className='fs-xl bg-accent-black txt-accent-white'>This is the initial setup of Reflection Design & Architect website
      আমার সোনার বাংলা</div>
    </div>
  )
}

export default App
