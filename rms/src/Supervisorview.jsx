
import React from 'react'
import { useState } from 'react'
const Supervisorview = () => {
    const link1="http://127.0.0.1:5000/supa_requests/"
    const [id, setId]=useState(0)
    const link2="http://127.0.0.1:5000/s_approve/"+id
    const link3="http://127.0.0.1:5000/s_reject/"+id
    const handleSubmit1 = async () => {
        const url="http://127.0.0.1:5000/s_approve/"+id
        const options = {
            method: "GET"
        }
        const response = await fetch(url, options)
    }
  return (
    <div>
        <div>super view</div>
        <div><a href={link1}>Pending requests</a></div>
        <form onSubmit={handleSubmit1}>
            <div>
            <label htmlFor='id'>Forward by ID:</label>
            <input type='text' id="id" value={id} onChange={(e)=>setId(e.target.value)} />
            <a href={link2}><button type='submit'>Forward</button></a>
            </div>
        </form>
        <form onSubmit={handleSubmit1}>
            <div>
            <label htmlFor='id'>Reject by ID:</label>
            <input type='text' id="id" value={id} onChange={(e)=>setId(e.target.value)} />
            <a href={link3}><button type='submit'>Forward</button></a>
            </div>
        </form>
    </div>
  )
}

export default Supervisorview