import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
            return;
        }

        if (+age < 1) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid age (> 0).",
            });
            return;
        }

        props.onAddUser(age, username);
        setUsername("");
        setAge("");
    };

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form action="" onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        onChange={usernameChangeHandler}
                        value={username}
                    />
                    <label htmlFor="age">Age(Years)</label>
                    <input
                        type="number"
                        id="age"
                        onChange={ageChangeHandler}
                        value={age}
                    />
                    <Button type="submit" onClick={null}>
                        Add User
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
