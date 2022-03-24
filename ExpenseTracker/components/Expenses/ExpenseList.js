import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let ExpenseToDisplay = <p>Nothing to display !</p>;
  if (props.items.length > 0) {
    ExpenseToDisplay = props.items.map((expense, index) => (
      <ExpenseItem
        key={index}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return <div>{ExpenseToDisplay}</div>;
};
export default ExpenseList;
