import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function HomePage() {
     const handleChange=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:3001/getassets',{email,password})
  .then(result=>{console.log(result)
    if(result.data==="success"){
 navigate('/list')
    }
   
  })
  .catch(err=>console.log(err))
  


 }
  return (
     <div className="d-flex justify-content-center align-items-center pe-2  min-vh-100">
      
   
      <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: "400px" }}>
       <button onClick={addassets}>add assets</button>
       <button>list all aseets</button>



        

   
       
      </div>
    </div>
  )
}

export default HomePage