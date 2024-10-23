import React from 'react'
import { useState } from 'react'
const Managerview = () => {
    const link1="http://127.0.0.1:5000/mana_requests/"
    const [id1, setId1]=useState(0)
    const [id2, setId2]=useState(0)
    const link2="http://127.0.0.1:5000/m_approve/"+id1
    const link3="http://127.0.0.1:5000/m_reject/"+id2
    const handleSubmit1 = async () => {
        const url="http://127.0.0.1:5000/m_approve/"+id1
        const options = {
            method: "GET"
        }
        const response = await fetch(url, options)
    }
    const handleSubmit2 = async () => {
        const url="http://127.0.0.1:5000/m_approve/"+id2
        const options = {
            method: "GET"
        }
        const response = await fetch(url, options)
    }
  return (
    <div>
        <div>manager view</div>
        <div><a href={link1}>Pending requests</a></div>
        <form onSubmit={handleSubmit1}>
            <div>
            <label htmlFor='id'>Approve by ID:</label>
            <input type='text' id="id" value={id1} onChange={(e)=>setId1(e.target.value)} />
            <a href={link2}><button type='submit'>Approve</button></a>
            </div>
        </form>
        <form onSubmit={handleSubmit2}>
            <div>
            <label htmlFor='id'>Reject by ID:</label>
            <input type='text' id="id" value={id2} onChange={(e)=>setId2(e.target.value)} />
            <a href={link3}><button type='submit'>Reject</button></a>
            </div>
        </form>
    </div>
  )
}

export default Managerview