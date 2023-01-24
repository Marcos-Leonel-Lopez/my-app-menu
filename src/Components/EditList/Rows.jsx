import React from "react";

const Rows = ({el, setDataEdit, delateData}) => {
  let {title, description, id} = el;

  return(
    <>
    <tr>
            <td>{title}</td>
            <td>{description}</td>
            <td>
              <button onClick={()=>setDataEdit(el)}>ediar</button>
              <button onClick={()=>delateData(id)}>eliminar</button>
            </td>
          </tr>
    </>
  );
};

export default Rows;
