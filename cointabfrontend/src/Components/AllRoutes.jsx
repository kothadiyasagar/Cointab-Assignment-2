import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Details from '../Pages/Detail/Details';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes