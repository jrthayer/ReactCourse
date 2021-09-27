import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";
import React from "react";

function Expenses(props) {
    const [filterValue, setFilterValue] = useState("2020");

    function changeFilterHandler(value) {
        setFilterValue(value);
    }

    const filteredExpenses = props.data.filter(function (item) {
        return item.date.getFullYear() === parseInt(filterValue);
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                onFilterChange={changeFilterHandler}
                startFilter={filterValue}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList data={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
