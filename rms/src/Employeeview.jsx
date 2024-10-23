

const Employeeview = (props) => {
const a = props.id
const link1="http://127.0.0.1:5000/emp_requests/"+a
const link2="http://127.0.0.1:5000/sup_requests/"+a
const link3="http://127.0.0.1:5000/man_requests/"+a
const link4="http://127.0.0.1:5000/rej_requests/"+a
  return (
    <div>
        <div>Employee id: {a}</div>
        <div><a href={link1}>All requests made by You.</a></div>
        <div><a href={link2}>Waiting manager confirmation</a></div>
        <div><a href={link3}>Confirmed</a></div>
        <div><a href={link4}>Rejected</a></div>
    </div>

  )
}

export default Employeeview



