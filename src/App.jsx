import React from 'react'
import Header from './components/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import NewLog from './components/NewLog'
import VlidateLogin from './components/VlidateLogin'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/newSign' element={<NewLog/>}/>
        <Route path='/newlog' element={<VlidateLogin/>}/>



      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
