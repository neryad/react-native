import React from "react";

export const BasicTypes = () => {
  const name: string = "fernando";

  const age: number = 38;

  const isActive: boolean = true;

  const powers: string[] = ["React", "ReactNative", "Astro"];

  return (
    <>
      <h3>Tipos de datos</h3>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{isActive ? "activo" : "no activo"}</h3>
      <p>{powers.join(", ")}</p>
    </>
  );
};
