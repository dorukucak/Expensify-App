import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit=(expense => {
     this.props.dispatch(editExpense(this.props.expense.id, expense));
     this.props.history.push('/');
     this.console.log('updated', expense)
    });  
    onClick=() => {
     this.props.dispatch(removeExpense({ id: this.props.expense.id }));
     this.props.history.push('/')
    };
  render () {
    return(
      <div>
       <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}
        />
       <button onClick={this.onClick}>Remove</button>      
      </div>
    )};
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(EditExpensePage);

// Old code

/* const EditExpensePage = (props) => {
return(
 <div>
  <ExpenseForm
   expense={props.expense}
    onSubmit={(expense) => {
     props.dispatch(editExpense(props.expense.id, expense));
     props.history.push('/')
     console.log('updated', expense)
    }}
  />
  <button onClick={() => {
   props.dispatch(removeExpense({ id: props.expense.id }));
   props.history.push('/')
  }}>Remove</button>
 </div>
)}; 

const mapStateToProps = (state, props) => {
  return {
   expense: state.expenses.find((expense) => (expense.id === props.match.params.id))
   };  
}; */

