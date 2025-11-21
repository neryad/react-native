import React from "react";
import { useAutContext } from "../../context/AuthContext";

export const LoginPage = () => {
  const { isChecking, isAuthenticated, login, user, logout } = useAutContext();

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button
            onClick={() => logout}
            className="bg-blue-500 p-2 text-white rounded-xl mt-2"
          >
            Salir
          </button>
        </>
      ) : (
        <>
          <h3>Ingresar a la aplicación</h3>
          <button
            onClick={() => login("papa@gmail.com", "123456")}
            className="bg-blue-500 p-2 text-white rounded-xl  mt-2"
          >
            Ingresar
          </button>
        </>
      )}
    </>
  );
};
