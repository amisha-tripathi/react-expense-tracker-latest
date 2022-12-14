import "./Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import react, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterValue = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses=props.expenses.filter(
    expense=>{
      return new Date(expense.date).toDateString().substring(11,15) === filteredYear;
      //return expense.date.getFullYear().toString() === filteredYear;
    }
  );
  
  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onFilterChange={filterValue} />   
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};
export default Expenses;
