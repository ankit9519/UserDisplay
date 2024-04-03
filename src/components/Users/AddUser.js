import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();


  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid Username'
      })
      return;
    }

    if (+age < 0) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid Age (>0)',
      })
      return;
    }
    props.onAddUser(username, age);
    setUserName("");
    setAge("");
  };

  const userNameChangedHandler = (e) => {
    setUserName(e.target.value);
  };

  const userAgeChangedHandler = (e) => {
    setAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          onChange={userNameChangedHandler}
          value={username}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          onChange={userAgeChangedHandler}
          value={age}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUser;
