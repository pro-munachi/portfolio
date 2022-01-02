import { Routes, Route } from 'react-router-dom'

import NavBar from './components/Navbar/Navbar'
import './App.css'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='routes'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
