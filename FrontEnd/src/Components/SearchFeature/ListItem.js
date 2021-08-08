import React from "react";
import { ListContainer } from "./Listitem.style";

const ListItem = ({ id, name, photo, username }) => {
  return (
    <ListContainer>
      {console.log(id)}
      <img src={photo} alt={name} />
      <div>
        <h5>{name}</h5>
        <small>{username}</small>
      </div>
      <h3>&#8250;</h3>
    </ListContainer>
  );
};
export default ListItem;
