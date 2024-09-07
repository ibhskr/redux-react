import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import "./App.css";
import { removeUser } from "./store/slice/UserSlice";
function DisplayUser() {
  const data = useSelector((state) => {
    return state.users;
  });
  console.log(data);
  const dispatch = useDispatch();
  const deleteuser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div className="display">
      <h4>User list</h4>
      <ul>
        {data.map((user, id) => {
          return (
            <div className="list" key={id}>
              
              <li >{user}</li>
              <button onClick={() => deleteuser(id)}>
                <AiFillDelete />
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default DisplayUser;
