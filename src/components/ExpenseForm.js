import './ExpenseForm.css';
import React, {useState} from "react";

const ExpenseForm=(props)=>{
    const [Title, newTitle]=useState('');
    const [Amount,newAmount]=useState('');
    const[Date, newDate]=useState('');

    const titleChangeHandler =(event)=>{
        newTitle(event.target.value); //this will now set the value of title with new title value.
    }   
    const amountChangeHandler=(event)=>{
        newAmount(event.target.value);
    }   
    const dateChangeHandler=(event)=>{
        newDate(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault(); //automatic page reload na ho bar bar.
        const expenseData={
            title:Title,
            amount:+Amount,
            date:Date
        };
        props.onSaveExpenseData(expenseData);
        newTitle('');
        newAmount('');
        newDate('');
        
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type="text" value={Title} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type="number" value={Amount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type="date" value={Date} min="2019-01-01" max="022-12-13" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;