import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Signup from './Signup'
import Home from './Home'
import Login from './Login'
import View from './View'
import Employeeview from './Employeeview'
import Supervisorview from './Supervisorview'
import Managerview from './Managerview'
import { useLocation } from 'react-router-dom'

import Requestform from './Requestform'
function App() {

  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/employee_view/" element={<Employeeview/>}/>
          <Route path="/supervisor_view/" element={<Supervisorview/>}/>
          <Route path="/manager_view/" element={<Managerview/>}/>
          <Route path="/Requestform" element={<Requestform/>}/>
          <Route path="/view" element={<View />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
