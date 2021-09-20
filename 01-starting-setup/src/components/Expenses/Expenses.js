import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
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

    return <Card className="expenses">{expenseArray}</Card>;
}

export default Expenses;
