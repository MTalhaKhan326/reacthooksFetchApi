import React, { Fragment, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
const Users = () => {
    const [user , setUser]=useState([])
    useEffect(()=>{
        fetch("https://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            data.json().then(result=>{
                console.warn('result',result)
                setUser(result.data)
            })
        })
    },[])
  return (
    <div>
        <h1>Usrs Listing is here</h1>
        {
        <Fragment>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>salary</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    user.map((e, index)=>
                        <tr key={index}>
                            <td>{e.id}</td>
                            <td>{e.employee_name}</td>
                            <td>{e.employee_salary}</td>
                            <td>{e.employee_age}</td>
                        </tr>
                    )
                   }
                </tbody>
            </Table>
        </Fragment>
        }
    </div>
  )
}

export default Users