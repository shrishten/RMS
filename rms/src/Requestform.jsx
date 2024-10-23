
import { useState } from 'react'
const Contactform = () => {
  const [date, setDate]=useState("")
  const [requestor, setRequestor]=useState("")
  const [link, setLink]=useState("")
  const [quantity, setQuantity]=useState(0)
  const [purpose, setPurpose]=useState("")
  const [timeframe, setTimeframe]=useState("")
  const [cost, setCost]=useState("")

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = {
      date,
      requestor,
      link,
      quantity,
      purpose,
      timeframe,
      cost
    }

    const url = "http://127.0.0.1:5000/create_request"
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
    } 
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor='date'>Date:</label>
        <input type='text' id="date" value={date} onChange={(e)=>setDate(e.target.value)} />
      </div>
      <div>
        <label htmlFor='requestor'>Requestor:</label>
        <input type='text' id="requestor" value={requestor} onChange={(e)=>setRequestor(e.target.value)} />
      </div>
      <div>
        <label htmlFor='link'>Link:</label>
        <input type='text' id="link" value={link} onChange={(e)=>setLink(e.target.value)} />
      </div>
      <div>
        <label htmlFor='quantity'>Quantity:</label>
        <input type='number' id="date" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
      </div>
      <div>
        <label htmlFor='purpose'>Purpose:</label>
        <input type='text' id="purpose" value={purpose} onChange={(e)=>setPurpose(e.target.value)} />
      </div>
      <div>
        <label htmlFor='timeframe'>Timeframe:</label>
        <input type='text' id='timeframe' value={timeframe} onChange={(e)=>setTimeframe(e.target.value)} />
      </div>
      <div>
        <label htmlFor='cost'>Cost:</label>
        <input type='number' id="cost" value={cost} onChange={(e)=>setCost(e.target.value)} />
      </div>
      <button type='submit'>Create Request</button>
    </form>
  )
}

export default Contactform