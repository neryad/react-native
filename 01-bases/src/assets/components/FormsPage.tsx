import React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: "hola@sdm.com.do",
      password: "12345",
    },
  });

  const onSubmit = (myform: FormInputs) => {
    console.log({ myform });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formularios</h3>

        <div className="flex flex-col space-y-2 w-[500px]">
          <input
            type="email"
            placeholder="email"
            className="border border-gray-300 rounded-xl"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            placeholder="password"
            className="border border-gray-300 rounded-xl"
            {...register("password", { required: true })}
          />

          <button type="submit" className="bg-blue-500 text-white">
            ingresar
          </button>
        </div>
      </form>
    </>
  );
};
