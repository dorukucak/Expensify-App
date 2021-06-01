// SET_TEXT_FILTER

export const setTextFilter = (textFilter='') => ({
 type: 'TEXT_FILTER',
 textFilter
});

// SORT_BY_DATE

export const sortByDate = () => ({
  type: 'DATE_FILTER',
 });

// SORT_BY_AMOUNT

export const sortByAmount = () => ({
  type: 'AMOUNT_FILTER',
 });

// SET_START_DATE

export const setStartDate = (startDate) => ({
  type: 'START_DATE',
  startDate
 });

// SET_END_DATE

export const setEndDate = (endDate) => ({
  type: 'END_DATE',
  endDate
 });