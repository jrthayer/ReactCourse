import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import React from "react";

function Expenses(props) {
    const [filterValue, setFilterValue] = useState("2020");

    let expenses = props.data;
    let expenseArray = [];

    for (let x = 0; x < expenses.length; x++) {
        expenseArray.push(
            <ExpenseItem
                title={expenses[x].title}
                amount={expenses[x].amount}
                date={expenses[x].date}
            ></ExpenseItem>
        );
    }

    function changeFilterHandler(value) {
        setFilterValue(value);
        console.log(`State Value: ${filterValue}`);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                onFilterChange={changeFilterHandler}
                startFilter={filterValue}
            />
            {expenseArray}
        </Card>
    );
}

export default Expenses;
