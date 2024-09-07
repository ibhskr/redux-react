1. Install Dependencies Install @reduxjs/toolkit and react-redux using npm or yarn.
   Install @reduxjs/toolkit react-redux

2. Create the Store Set up a Redux store using configureStore to hold your application's state.

   import { configureStore } from "@reduxjs/toolkit";
   import userSlice from "./slice/UserSlice";

   const store = configureStore({
   reducer: {
   users: userSlice,
   },
   });

   export default store;

3. Create a Slice Define a slice using createSlice. A slice includes the initial state, reducers (functions that modify the state), and automatically generated actions.

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
name: "User",
initialState: [],
reducers: {
addUser(state, action) {
state.push(action.payload); // the data comes in action.payload and push it on state
},
removeUser(state, action) {
state.splice(action.payload, 1);
console.log( action.payload);
},
deleteUsers(state, action) {},
},
});

console.log(userSlice.actions);
export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions;

4. Provide the Store to React Wrap your app in the Provider component from react-redux and pass the store to it to make the Redux state available throughout the app.

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { addUser } from "./store/slice/UserSlice";
import DisplayUser from "./DisplayUser";
function App() {
const [username, setUsername] = useState(""); // Initialize with an empty string
const dispatch = useDispatch();

// submit data and add rudux
function handleSubmit(event) {
event.preventDefault();
console.log("Username Submitted:", username);
dispatch(addUser(username));
}

return (
<>
<div className="app">
<h1>Hello.</h1>
<div>
<form onSubmit={handleSubmit}>
<input
type="text"
value={username}
onChange={(e) => setUsername(e.target.value)} // Handle the change
placeholder="Enter your username"
/>
<button type="submit">Submit</button>{" "}
{/_ Set button type to submit _/}
</form>
</div>
<DisplayUser/>
</div>
</>
);
}

export default App;

5. Use Redux in Components Use useSelector to read the state in your components. Use useDispatch to send actions (trigger updates to the state) from your components.

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { addUser } from "./store/slice/UserSlice";
import DisplayUser from "./DisplayUser";
function App() {
const [username, setUsername] = useState(""); // Initialize with an empty string
const dispatch = useDispatch();

// submit data and add rudux
function handleSubmit(event) {
event.preventDefault();
console.log("Username Submitted:", username);
dispatch(addUser(username));
}

return (
<>
<div className="app">
<h1>Hello.</h1>
<div>
<form onSubmit={handleSubmit}>
<input
type="text"
value={username}
onChange={(e) => setUsername(e.target.value)} // Handle the change
placeholder="Enter your username"
/>
<button type="submit">Submit</button>{" "}
{/_ Set button type to submit _/}
</form>
</div>
<DisplayUser/>
</div>
</>
);
}

export default App;

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
