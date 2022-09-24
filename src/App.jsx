import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import Contact from './views/Contact'
import Home from './views/Home'
import NotFound from './views/NotFound'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
