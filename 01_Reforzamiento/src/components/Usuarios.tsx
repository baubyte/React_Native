import React, { useEffect, useRef, useState } from 'react'
import {reqResApi} from '../api/reqRes'
import { ReqResList, User } from '../interfaces/ReqResList'

export const Usuarios = () => {

    const [users, setUsers] = useState<User[]>([])

    const pageRef = useRef(1)

    useEffect(() => {
        requestUsers();
    }, [])
    
    /**
     * 
     */
    const requestUsers = async () => {
        try {
            const response = await reqResApi.get<ReqResList>('/users',{
                params: {
                    page:pageRef.current
                }
            })
            if (response.data.total_pages > pageRef.current) {
                setUsers(response.data.data)
                pageRef.current++;
            }else{
                alert('No users found');
            }
        } catch (error) {
            console.log(error);
        }

    }

    const renderItem = ({id, avatar, first_name, last_name, email}:User) => {
        return(
            <tr key={id.toString()}>
                <td>
                   <img src={avatar} alt={first_name} style={{
                       width:46,
                       borderRadius:100
                   }}/>
                </td>
                <td>
                    {first_name} {last_name}
                </td>
                <td>
                    {email}
                </td>
            </tr>
        )
    }
  return (
    <>
        <h3>
            Usuarios
        </h3>
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Avatar
                    </th>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Email
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(renderItem)
                }
            </tbody>
        </table>
        <button className="btn btn-success" onClick={requestUsers}>Siguiente</button>
    </>
  )
}
