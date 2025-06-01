import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ServicePage from './pages/ServicePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage'
import Navebar from './components/Navebar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='aboutpage' element={<AboutPage />} />
          <Route path='contactpage' element={< ContactPage />} />
          <Route path='servicepage' element={<ServicePage />} />
          <Route path='registerpage' element={<RegisterPage />} />
          <Route path='loginpage' element={<LoginPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
