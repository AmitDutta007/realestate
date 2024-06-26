
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Offers from './pages/Offers'
import PrivateRoute from './components/PrivateRoute'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import CreateListing from './pages/CreateListing'
import Protectedroute from './components/Protectedroute'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>

          <Route path='/forgotpassword' element={<ForgotPassword />} />

          <Route path='/sign-up' element={<SignUp />} />

          <Route path='/' element={<PrivateRoute />}>
            <Route path='/offers' element={<Offers />} />
          </Route>

          {/* <Route path='/sign-in' element={<Protectedroute />}> */}
            <Route path='/sign-in' element={<SignIn />} />
          {/* </Route> */}

          <Route path='/create-listing' element={<CreateListing />} />
          
          <Route />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
