import {  Table } from "react-bootstrap";
//import { Table } from "reactstrap";
import axios from 'axios';
import { useState, useEffect } from "react";


 const EmployeesTable = () => {
    
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetchEmployees()
      }, []);
    
    const fetchEmployees = async() =>{
    try{
        const response = await axios(`http://localhost:9000/employees`);
        console.log(response.data.employees);
        setEmployees(response.data.employees);
      }catch(e){
        console.log(e);
      }
    
    }
    return ( 
        <>
        <h1>Employee Information</h1>
       <Table striped bordered hover>
                    <thead>
                        <tr className="bg-dark text-white">
                        <th>Tnl Id</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Department</th>
                        <th>Reporting Manager Email</th>
                        <th>Created At</th>
                        <th>Created By</th>
                        </tr>
                    </thead>
                    <tbody>
                       {employees.map( employee => {
                           const {tnl_id, name, email_id,role,department,created_at,created_by,reporting_manager_email} =employee;
                           return(
                            <tr key={tnl_id}>
                            <td className="bg-danger text-white">{tnl_id}</td>
                            <td>{email_id}</td>
                            <td>{name}</td>
                            <td>{role}</td>
                            <td>{department}</td>
                            <td>{reporting_manager_email}</td>
                            <td>{created_at}</td>
                            <td>{created_by}</td>
                            
                          </tr>
                           )
                       })}
                    </tbody>
                </Table>
    </>
    )
}
export default EmployeesTable;