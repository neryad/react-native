import React from "react";

export const BasicFunciones = () => {
  const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>

      <span>El resultado de sumar {addTwoNumbers(2, 8)}</span>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};
