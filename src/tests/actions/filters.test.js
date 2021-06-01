import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('should generate set start date action object', () => {
 const action = setStartDate(moment(0));
 expect(action).toEqual({
  type: 'START_DATE',
  startDate: moment(0)
 })
});

test('should generate set end date action object', () => {
 const action = setEndDate(moment(0));
 expect(action).toEqual({
  type: 'END_DATE',
  endDate: moment(0)
 })
}); 

test('should generate set text filter  object with test value', () => {
 const text = 'Something in';
 const action = setTextFilter(text);
 expect(action).toEqual({
  type: 'TEXT_FILTER',
  textFilter: text
 })
});

test('should generate set text filter  object with default', () => {
 const action = setTextFilter();
 expect(action).toEqual({
  type: 'TEXT_FILTER',
  textFilter: ''
 })
});

test('should generate action object for sort by date', () => {
 expect(sortByDate()).toEqual({ type: 'DATE_FILTER'});
});

test('should generate action object for sort by amount', () => {
 expect(sortByAmount()).toEqual({ type: 'AMOUNT_FILTER'});
});