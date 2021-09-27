import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [error, setError] = useState();

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid age (> 0).",
            });
            return;
        }

        props.onAddUser(enteredAge, enteredName);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
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
                    <input type="text" id="username" ref={nameInputRef} />
                    <label htmlFor="age">Age(Years)</label>
                    <input type="number" id="age" ref={ageInputRef} />
                    <Button type="submit" onClick={null}>
                        Add User
                    </Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
