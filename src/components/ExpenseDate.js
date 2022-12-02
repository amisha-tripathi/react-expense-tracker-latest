import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = new Date(props.date).toDateString().substring(3,7);
  const day = new Date(props.date).toDateString().substring(8,10);
  const year=new Date(props.date).toDateString().substring(11,15);
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div> 
      
    </div>
  );
};

export default ExpenseDate;