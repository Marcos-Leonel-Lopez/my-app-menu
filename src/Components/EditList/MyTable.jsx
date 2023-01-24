import React from "react";
import Rows from "./Rows";

const MyTable = ({data , setDataEdit, delateData }) => {
  return (
    <>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0
          ?
          <tr>
            <td colSpan="3">sin datos</td>
          </tr> 
          : data.map((el)=><Rows key={el.id} el={el} setDataEdit={setDataEdit} delateData={delateData}/>)
          }
        </tbody>
      </table>
    </>

  )
};

export default MyTable;
