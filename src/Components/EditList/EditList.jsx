import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function EditList() {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/platos')
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  const handleEdit = id => {
    setEditing(true);
    setEditingId(id);
    setNewDescription(data.find(item => item.id === id).description);
  };

  const handleSave = async id => {
    try {
      const response = await fetch(`http://localhost:5000/platos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ description: newDescription }),
        headers: { 'Content-Type': 'application/json' }
      });
      const updatedData = await response.json();
      setData(prevData => prevData.map(item => (item.id === id ? updatedData : item)));
      setEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
     <>
     <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650  }} aria-label="simple table">
         <TableHead>
           <TableRow>
            
             <TableCell align="center">Nombre</TableCell>
             <TableCell align="center">Precio</TableCell>
             <TableCell align="center">Descripcion</TableCell>
             <TableCell align="center">Categoria</TableCell>
             <TableCell align="center">Imagen (URL)</TableCell>
             <TableCell align="center">Edit</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {data.map((row) => (
             <TableRow
               key={row.id}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell align="center">{row.title}</TableCell>
               <TableCell align="center">{row.price}</TableCell>
               <TableCell align="center">{row.description}</TableCell>
               <TableCell align="center">{row.category}</TableCell>
               <TableCell align="center">{row.picture}</TableCell>
               <TableCell>{editing && editingId === row.id ? (
             <>
               <input
                 type="text"
                 value={newDescription}
                 onChange={e => setNewDescription(e.target.value)}
               />
               <button onClick={() => handleSave(row.id)}>Save</button>
             </>
           ) : (
             <>
               <p>{row.description}</p>
               <button onClick={() => handleEdit(row.id)}>Edit</button>
             </>
           )}</TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     </>

    //  <div>
    //    <h1>Listado</h1>
    //    {data.map(item => (
    //      <div key={item.id}>
    //        <h2>{item.title}</h2>
    //        {editing && editingId === item.id ? (
    //          <>
    //            <input
    //              type="text"
    //              value={newDescription}
    //              onChange={e => setNewDescription(e.target.value)}
    //            />
    //            <button onClick={() => handleSave(item.id)}>Save</button>
    //          </>
    //        ) : (
    //          <>
    //            <p>{item.description}</p>
    //            <button onClick={() => handleEdit(item.id)}>Edit</button>
    //          </>
    //        )}
    //      </div>
    //    ))}
    //  </div>
  );
}



export default EditList;
