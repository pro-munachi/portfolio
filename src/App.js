import { Routes, Route } from 'react-router-dom'

import NavBar from './components/Navbar/Navbar'
import './App.css'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import SinglePage from './pages/SinglePage/SinglePage'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='routes'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:project' element={<SinglePage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
