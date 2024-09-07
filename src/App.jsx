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
            {/* Set button type to submit */}
          </form>
        </div>
        <DisplayUser/>
      </div>
    </>
  );
}

export default App;
