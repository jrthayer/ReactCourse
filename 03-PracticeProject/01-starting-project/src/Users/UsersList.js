import React from "react";
import Card from "../UI/Card";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
    const listElements = props.users.map((user) => {
        return <li key={user.id}>{`Name: ${user.name}, Age: ${user.age}`}</li>;
    });

    return (
        <Card className={classes.users}>
            <ul>{listElements}</ul>
        </Card>
    );
};

export default UsersList;
