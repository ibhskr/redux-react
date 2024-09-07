

### REACT.JS + reduxjs/toolkit

```md
# Redux Toolkit Example Application

This project demonstrates the usage of Redux Toolkit with a basic user management system. The application allows users to add and remove usernames from a list using Redux for state management.

## 1. Install Dependencies

Install the required dependencies:

```bash
npm install @reduxjs/toolkit react-redux
```

or

```bash
yarn add @reduxjs/toolkit react-redux
```

## 2. Create the Store

Set up a Redux store using `configureStore` to hold your application's state.

```js
// store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
```

## 3. Create a Slice

Define a slice using `createSlice`. A slice includes the initial state, reducers (functions that modify the state), and automatically generated actions.

```js
// slice/UserSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload); // Add new user
    },
    removeUser(state, action) {
      state.splice(action.payload, 1); // Remove user at the specified index
    },
    deleteUsers(state) {
      return []; // Clear all users
    },
  },
});

export const { addUser, removeUser, deleteUsers } = userSlice.actions;
export default userSlice.reducer;
```

## 4. Provide the Store to React

Wrap your app in the `Provider` component from `react-redux` and pass the store to it.

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

## 5. Create the Main Application

In the main component, handle form submission to add users to the Redux store.

```js
// App.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./slice/UserSlice";
import DisplayUser from "./DisplayUser";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    if (username.trim()) {
      dispatch(addUser(username));
      setUsername(""); // Clear the input field after submission
    }
  }

  return (
    <div className="app">
      <h1>Hello, Add Users!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <button type="submit">Submit</button>
      </form>
      <DisplayUser />
    </div>
  );
}

export default App;
```

## 6. Display the List of Users

Use `useSelector` to fetch the list of users from the Redux store, and `useDispatch` to remove them.

```js
// DisplayUser.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { removeUser } from "./slice/UserSlice";
import "./App.css";

function DisplayUser() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div className="display">
      <h4>User List</h4>
      <ul>
        {users.map((user, id) => (
          <div className="list" key={id}>
            <li>{user}</li>
            <button onClick={() => deleteUser(id)}>
              <AiFillDelete />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default DisplayUser;
```


