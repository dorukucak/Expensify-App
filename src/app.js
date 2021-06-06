import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
 
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();
store.dispatch(addExpense({ createdAt: 1622925069473, description: 'Water Bill', amount: '4500', }));
store.dispatch(addExpense({ createdAt: 1622925069473, description: 'Gas Bill', amount: '5000'}));
store.dispatch(addExpense({ description: 'Rent', amount: '3000'}));
store.dispatch(addExpense({ description: 'Gas Bill' }));



/* setTimeout(() => {
 store.dispatch(setTextFilter('rent'));
}, 3000); */

const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(VisibleExpenses);

const jsx = (
 <Provider store={store}>
 <AppRouter />
 </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
