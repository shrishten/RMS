import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Context=createContext()
const Login = () => {
    
    const [id, setId]=useState('')
    const [pwd, setPwd]=useState('')
    const navigate=useNavigate()
    
    const onSubmit = async (e) => {
        e.preventDefault()
    
        const url = "http://127.0.0.1:5000/ver_employees/"+id+"/"+pwd
        const options = {
            method: "GET",
            headers: {
              "Accept": "json",
            }
          }
        const response = await fetch(url, options)
        const data = await response.json()
        const tier=data.tier
        
        if(tier===-1){
            alert("wrong cred")
        }
        else{ 
            navigate("/view/", {state :{id: id, tier: tier}})
        }
      }
  return (
        <form onSubmit={onSubmit}>
      <div>
        <label htmlFor='id'>ID:</label>
        <input type='text' id="id" value={id} onChange={(e)=>setId(e.target.value)} />
      </div>
      <div>
        <label htmlFor='pass'>Pass:</label>
        <input type='text' id="requestor" value={pwd} onChange={(e)=>setPwd(e.target.value)} />
      </div>
      <button type='submit'>Login!</button>
    </form>
  )
}

export default Login