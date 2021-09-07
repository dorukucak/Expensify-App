import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
    console.log('updated', expense)
  };
  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/')
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove</button>
        </div>
      </div>
    )
  };
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => (expense.id === props.match.params.id))
  };
};

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (id) => dispatch(removeExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

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


}; */

