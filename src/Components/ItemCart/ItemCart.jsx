import React from "react";
import { useEffect, useState } from "react";


const ItemCart = ({nombre, precio, cantidad}) => {

  const [list, setList] = useState([]);

  const addItemList = (nombre, precio, cantidad) => {
    console.log(nombre, precio, cantidad);
    let i = 0;
    let cartTemp = [];
    const newObj = {
      name: nombre,
      price: precio,
    };
    console.log(newObj);
 while(i < cantidad) {
    cartTemp.push(newObj)
      i++;
      console.log(cartTemp);
  };
  console.log(cartTemp);
    setList(cartTemp);
  };

  useEffect(()=>{
    addItemList(nombre, precio, cantidad);
  },[])

  return (
    <ul>
    {
    list.map(item=><li >{item.name} - $ {item.price}</li>)
    }
    </ul>
  );
};

export default ItemCart;
