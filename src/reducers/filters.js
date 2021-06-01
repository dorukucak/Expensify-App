import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
 text: '',
 sortBy: 'date',
 startDate: moment().startOf('month'),
 endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
 switch (action.type) {
   case 'TEXT_FILTER':      
     return {...state, text: action.textFilter};
   case 'DATE_FILTER':      
     return {...state, sortBy: 'date'}; 
   case 'AMOUNT_FILTER':      
     return {...state, sortBy: 'amount'};
   case 'START_DATE':      
     return {...state, startDate: action.startDate}; 
   case 'END_DATE':      
     return {...state, endDate: action.endDate};         
   default:
     return state;
 }
};