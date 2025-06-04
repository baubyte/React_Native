import { useUser } from "../hooks/useUser";
import { UserRow } from "./UserRow";



export const UserPage = () => {
  const { users, nextPage, previousPage } = useUser();

  return (
    <>
      <h3>Usuarios:</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <UserRow key={user.id} user={user} />)}
        </tbody>
      </table>
      <div>
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  )
}


