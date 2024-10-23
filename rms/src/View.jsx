import React from 'react'
import { useLocation } from 'react-router-dom'
import Employeeview from './Employeeview'
import Managerview from './Managerview'
import Supervisorview from './Supervisorview'

const View = () => {
  const {state} = useLocation()
  const {id, tier} = state
  console.log(id)
    
  if (tier===1) {
    return<Employeeview id={id}/>
  }
  else if (tier===2) {
    return<Supervisorview />
  }
  else if (tier===3) {
    return<Managerview />
  }
}

export default View
