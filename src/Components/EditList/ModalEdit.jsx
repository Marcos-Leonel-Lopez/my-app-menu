import { useState } from "react";
import { Box, Button,  Modal, TextField } from "@mui/material";





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 5,
};


const ModalEdit = () => {
    
const [modal, setModal] = useState(false);

const ocModal = () =>{
setModal(!modal);
 }
 const guardarDatos= (e) =>{
  console.log(e);
 }
  return (
    <div>
      <Button onClick={ocModal}>Open modal</Button>
      <Modal
        open={modal}
        onClose={ocModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h2> Editor de contenido </h2>
        <div><TextField label="Nombre"/></div>
        <div><TextField label="Descripcion"  /> </div>
        <div><TextField label="Precio"  /></div>
        <div><TextField label="URL de Foto"  /></div>
             <div>
                 <Button type="submit" color="primary"onClick={(e)=>guardarDatos(e)}>Guardar</Button>
                 <Button color="secondary" onClick={()=>ocModal()}>Cancelar</Button>
             </div>
        </Box>
      </Modal>
    </div>
  
  )
};

export default ModalEdit;
