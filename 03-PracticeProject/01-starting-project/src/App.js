import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
    const [userArray, setUserArray] = useState([]);

    const addUserHandler = (userAge, userName, userId) => {
        setUserArray((prevArray) => {
            return [
                ...prevArray,
                { age: userAge, name: userName, id: Math.random().toString() },
            ];
        });
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler}></AddUser>
            <UsersList users={userArray}></UsersList>
        </div>
    );
}

export default App;
