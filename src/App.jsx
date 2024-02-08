import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
  

function App() {


  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
              
            
          </Routes>
        </Router>
      </Suspense>
    </>
  )
}

export default App
