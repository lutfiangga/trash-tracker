import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/notFound'
import ServerError from './pages/serverError'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
          <Route path='/error500' element={<ServerError />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
