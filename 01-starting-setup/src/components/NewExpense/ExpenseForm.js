import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        setEnteredTitle("");
        setEnteredDate("");
        setEnteredAmount("");

        props.onSaveExpenseData(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input
                        type="number"
                        name=""
                        id=""
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input
                        type="date"
                        name=""
                        id=""
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
