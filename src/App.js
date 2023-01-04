import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="App">
      {""}
      <div className="addUser">
        <input
          type="text"
          placeholder="Enter name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h2> {user.name}</h2>
              <h1> {user.username} </h1>
              <input
                type="text"
                placeholder="Change username"
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
              <button
                onClick={() =>
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  )
                }
              >
                Update username
              </button>
              <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
                Delete user
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
