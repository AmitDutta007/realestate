
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Offers from './pages/Offers'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/offers' element={<Offers/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route/>
        </Routes>
      </Router>
    </>
  )
}

export default App
