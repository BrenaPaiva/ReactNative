import React from "react";
import { useForm } from "react-hook-form";
import { timeService } from "../Services/timeService";

export default function TimeForm(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    timeService()
  };

  return (
   
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Time</label>
      <input defaultValue="Flamengo" {...register("time", {required: true})} /><br />
      {errors.time && <span>O campo time é obrigatório</span>}<br />
      <label>Descrição</label>
      <input {...register("descricao")} /><br />
      
      <input type="submit" />
    </form>
  );
}