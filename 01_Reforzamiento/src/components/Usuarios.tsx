import React from 'react'
import useUsers from '../hooks/useUsers'
import { User } from '../interfaces/ReqResList';


export const Usuarios = () => {
    const {users,nextPage,previousPage} = useUsers();

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
        <button className="btn btn-success" onClick={previousPage}>Anterior</button>
        &nbsp;
        <button className="btn btn-success" onClick={nextPage}>Siguiente</button>
    </>
  )
}
