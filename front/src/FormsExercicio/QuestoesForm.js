import { useForm } from "react-hook-form";
import React from 'react';



export default function TimeForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => QuestaoForm(data);

  return (
   
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Pergunta: </label>
      <input defaultValue="" {...register("pergunta", {required: true})} /><br />
      {errors.pergunta && <span>O campo pergunta é obrigatório</span>}<br />
      <label>Resposta:</label>
      <input {...register("resposta", {required: true})} /><br />
      {errors.resposta && <span>O campo resposta é obrigatório</span>}<br />
      
      <input type="submit" />
    </form>
  );
}