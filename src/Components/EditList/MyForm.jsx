import React, { useEffect } from "react";
import { useState } from "react";

const initialForm = {
    id: null,
    title:"",
    description:"",
};

const MyForm = ( {createData ,updateData, dataEdit, setDataEdit}) => {
    const [form , setForm] = useState(initialForm);

    useEffect(()=>{
      if(dataEdit){
        setForm(dataEdit)
      }else(
        setForm(initialForm)
      )
    },[dataEdit])

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!form.title || !form.description){
        alert("datos incompletos");
        return
      }

      if(form.id === null){
        createData(form);
      }else{
        updateData(form);
      }
      
      handleReset();
    };

    const handleReset = (e) => {
      setForm(initialForm);
      setDataEdit(null);
    };



  return (
    <>
    <h3>Agregar</h3>
    <form onSubmit={handleSubmit}> 
        <input type="text" name="title" placeholder="Plato" onChange={handleChange} value={form.title}/>
        <input type="text" name="description" placeholder="Descripcion" onChange={handleChange} value={form.description}/>
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
    </form>
    </>
  );
};

export default MyForm;
