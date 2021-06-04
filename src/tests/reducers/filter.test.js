import filtersReducer from '../../reducers/filters';
import moment from 'moment';


test('should setup default filter values', () => {
 const state = filtersReducer(undefined, { type: '@@INIT'})
 expect(state).toEqual({
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
 });
});

test('should set sortBy to amount', () => {
 const state = filtersReducer(undefined, { type: 'AMOUNT_FILTER'})
 expect(state.sortBy).toBe('amount')
});

test('should set amount to date', () => {
 const currentState = {
  text: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
 }
const action = { type: 'DATE_FILTER'};
const state = filtersReducer(currentState, action);
expect(state.sortBy).toBe('date')
});

test('should set text filter', () => {
const text = 'some text';
const action = { type: 'TEXT_FILTER', textFilter: text};
const state = filtersReducer(undefined, action);
expect(state.text).toBe(text)
});

test('should set start date filter', () => {
 const startDate = moment();
 const action = { type: 'START_DATE', startDate};
 const state = filtersReducer(undefined, action);
 expect(state.startDate).toBe(startDate)
 });

 test('should set end date filter', () => {
  const endDate = moment();
  const action = { type: 'END_DATE', endDate};
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(endDate)
  });

