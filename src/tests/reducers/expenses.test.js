import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
const state = expensesReducer(undefined, {type: '@@INIT'});
expect(state).toEqual([]);
});

test('should remove expense by id', () => {
 const action = { 
  type: 'REMOVE_EXPENSE',
  id: expenses[1].id
 }
 const state = expensesReducer(expenses, action);
 expect(state).toEqual([expenses[0], expenses[2]]);
 });

 test('should not remove expenses if id not found', () => {
  const action = { 
   type: 'REMOVE_EXPENSE',
   id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
  });

  test('should add expense', () => {
   const expense =  {
    id: '1',
    description: 'Grocery',
    note: '',
    amount: 20000,
    createdAt: 5000
   }
   const action = { 
    type: 'ADD_EXPENSE',
    expense
   }
   const state = expensesReducer(expenses, action);
   expect(state).toEqual([...expenses, expense]);
   });

    test('should edit expense by id', () => {
    const amount = 12200;
    const action = { 
     type: 'EDIT_EXPENSE',
     id: expenses[1].id,
     updates: {
      amount
     }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toEqual(amount);
    });

    test('should not edit expense', () => {
     const amount = 12200;
     const action = { 
      type: 'EDIT_EXPENSE',
      id: -1,
      updates: {
       amount
      }
     }
     const state = expensesReducer(expenses, action);
     expect(state).toEqual(expenses);
     });

     test('should set expenses', () => {
         const action = {
             type: 'SET_EXPENSES',
             expenses: [expenses[1]]
         };
         const state = expensesReducer(expenses, action);
         expect(state).toEqual([expenses[1]])
     });