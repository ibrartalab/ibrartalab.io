import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader'

const Home = lazy(() => import('./pages/Home'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {


  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  )
}

export default App
