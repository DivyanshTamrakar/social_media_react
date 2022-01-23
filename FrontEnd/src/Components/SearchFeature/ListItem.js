import React from "react";
import { Link } from "react-router-dom";
import { ListContainer } from "./Listitem.style";

const ListItem = ({ id, name, photo, username }) => {
  return (
    <ListContainer>
      <Link
        to={`/user/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="context">
          <img height="50px" width="50px" src={photo} alt={name} />
          <div>
            <h5>{name}</h5>
            <small>{username}</small>
          </div>
          <h3>&#8250;</h3>
        </div>
      </Link>
    </ListContainer>
  );
};
export default ListItem;
