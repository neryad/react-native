import React from "react";
import { UserRow } from "./UserRows";
import { UseUsers } from "../../hooks/UseUsers";

export const UserPage = () => {
  const { users, nextPage, prevPage } = UseUsers();

  return (
    <>
      <h3>Usuarios</h3>

      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow user={user} key={user.id} />
          ))}
        </tbody>
      </table>

      <div className="flex justify-between w-[500px] mt-2">
        <button onClick={prevPage} className="p-2 bg-blue-500 text-white">
          Anteriores
        </button>
        <button onClick={nextPage} className="p-2 bg-blue-500 text-white">
          Siguientes
        </button>
      </div>
    </>
  );
};
