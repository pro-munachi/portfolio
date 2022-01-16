import { Routes, Route } from 'react-router-dom'

import NavBar from './components/Navbar/Navbar'
import './App.css'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import SinglePage from './pages/SinglePage/SinglePage'
import ContactMe from './pages/Contact/ContactMe'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='routes'>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<ContactMe />} />
            <Route path='/projects/:project' element={<SinglePage />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </div>
    </div>
  )
}

export default App
