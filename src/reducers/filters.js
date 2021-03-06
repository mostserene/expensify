//import moment from 'moment';
import moment from 'moment';
import 'react-dates/initialize';


const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  
  const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        return {
          ...state,
          text: action.text,
        };
      case 'SET_AMOUNT_FILTER':
        return {
          ...state,
          sortBy: 'amount',
        };
      case 'SET_DATE_FILTER':
        return {
          ...state,
          sortBy: 'date',
        };
      case 'SET_START_DATE':
        return {
          ...state,
          startDate: action.startDate,
        };
      case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.endDate,
        };
      default:
        return state;
    }
  };

  export default filtersReducer;