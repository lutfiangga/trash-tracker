import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/notFound'
import ServerError from './pages/serverError'
import About from './pages/about'
import Tnc from './pages/tnc'
import Pnp from './pages/pnp'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/tnc" element={<Tnc />}/>
          <Route path="/pnp" element={<Pnp />}/>
          <Route path="*" element={<NotFound />}/>
          <Route path='/error500' element={<ServerError />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
