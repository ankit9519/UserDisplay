import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  function handleAddUser(uName, uAge) {
    setUsersList((prev) => {
      return [...prev, { name: uName, age: uAge }];
    });
  }

  return (
    <div>
      <AddUser onAddUser={handleAddUser} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
