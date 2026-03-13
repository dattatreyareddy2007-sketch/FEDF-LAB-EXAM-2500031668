import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AdminApi() {
  const[data,setData] = useState([])
  const[error,setError] = useState("")

  const displayData = async() => {
    try{
      const response = await axios.get("https://dummy-json.mock.beeceptor.com/companies")
      setData(response.data)
    }
    catch(error)
    {
      setError(error.message)
    }
  }

  useEffect(() => {
    displayData()
  },[]);

  return (
    <div>
      <h2>AXIOS</h2>
      {
        error? <b>{error}</b>:data.length== 0? <h1>NO DATA</h1> :
        <table border={1} cellPadding={10} cellSpacing={5}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>address</th>
            <th>industry</th>
          </tr>
          {
            data.map((company,index) => (
              <tr key={index}>
                  <td>{company.id}</td>
                  <td>{company.name}</td>
                  <td>{company.address}</td>
                  <td>{company.industry}</td>
              </tr>
            ))
          }
        </table>
      }
    </div>
  )
}