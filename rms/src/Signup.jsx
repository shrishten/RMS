import { useState } from "react"


const Signup = () => {
    const [id, setId]=useState("")
    const [pass, setPass]=useState("")
    const [tier, setTier]=useState(1)

    const onSubmit = async (e) => {
        e.preventDefault()
        const data = {
          id,
          pass,
          tier
        }
    
        const url = "http://127.0.0.1:5000/create_employee"
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body:JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status!==200){
          const data= await response.json()
          alert(data.message)
        } else{
            alert("Signup Success!")
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
        <input type='text' id="requestor" value={pass} onChange={(e)=>setPass(e.target.value)} />
      </div>
      <div>
        <label htmlFor='tier'>Tier</label>
        <input type='text' id="tier" value={tier} onChange={(e)=>setTier(e.target.value)} />
      </div>
      <button type='submit'>Sign Up!</button>
    </form>
  )
}

export default Signup