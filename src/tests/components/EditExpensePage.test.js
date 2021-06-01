import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

let editExpense, history, wrapper;

beforeEach(() => {
 editExpense = jest.fn();
 history = { push: jest.fn() };
});

test('should render AddExpensePage correctly', () => { 
 const wrapper = shallow(<EditExpensePage />);
 expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense correctly with data', () => {
 const wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history} />);
 wrapper.find(ExpenseForm).prop('onSubmit')(expenses[1]);
 expect(history.push).toHaveBeenLastCalledWith('/');
 expect(editExpense).toHaveBeenLastCalledWith(expenses[1]);
});