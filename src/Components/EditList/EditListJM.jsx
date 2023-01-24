import React, { useEffect, useState } from "react";
import MyForm from "./MyForm";
import MyTable from "./MyTable";



const EditListJM = () => {



  const initialDb = [
    {
      "id": 1,
      "title": "Empanadas",
      "description": "Empanada de carne picada a cuchillo",
      "price": 120,
      "picture": "https://img.freepik.com/foto-gratis/empanadas-carne-masa-bougie-tabla-madera_140725-4827.jpg?w=1380&t=st=1673762672~exp=1673763272~hmac=3237162fbc334db9b1157655ae1b70499644cc633c81cb3bb749282062c217e7",
      "category": "entrada",
      "rating": 4.5,
      "stock": 10
    },
    {
      "id": 2,
      "title": "Hummus",
      "description": "Hummus de garbanzo decorado con aceite de oliva, garbanzos y paprika",
      "price": 250,
      "picture": "https://img.freepik.com/foto-gratis/hummus-clasico-oriental-recien-hecho-servido-tazon-sobre-mesa_1220-5511.jpg?w=1380&t=st=1673772465~exp=1673773065~hmac=70b819400f4f430c078549cf371fa0f0d2158b46544e5f33f4334389ed905143",
      "category": "entrada",
      "rating": 4,
      "stock": 2
    },
    {
      "id": 3,
      "title": "Picada para compartir",
      "description": "Picada de queso de cabra, roquefort, aceitunas, salame, jamon crudo y bondiola ahumada",
      "price": 800,
      "picture": "https://img.freepik.com/foto-gratis/bandeja-catering-antipasto-tocino-cecina-salami-queso-uvas-mesa-madera_2829-19948.jpg?w=1380&t=st=1673772418~exp=1673773018~hmac=5cbab6816ac6f18a745a3078c8f9f1eeb2220422cb84b7a02307793cf4e3c436",
      "category": "entrada",
      "rating": 3,
      "stock": 10
    }
  ]



  const [db, setDb] = useState(initialDb);
  const [dataEdit, setDataEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb(...db, data);
  };

  const updateData = (data) => { };

  const delateData = (id) => { };
  return (
    <>
      <MyForm 
      createData={createData} 
      updateData={updateData} 
      dataEdit={dataEdit} 
      setDataEdit={setDataEdit} />
      <MyTable data={db} setDataEdit={setDataEdit} delateData={delateData} />
    </>
  )
};

export default EditListJM;
