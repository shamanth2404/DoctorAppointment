import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Contacts from '../pages/Contacts'
import Doctors from '../pages/doctors/Doctors'
import DoctorDetails from '../pages/doctors/DoctorDetails'
import Signup from '../pages/Signup'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctorDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/contact' element={<Contacts />} />      
    </Routes>
  )
}

export default Routers
