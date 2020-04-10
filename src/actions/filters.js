

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});
// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
 export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  });
  
  export const setSortByAmount = (sortBy = 'amount') => ({
    type: 'SET_AMOUNT_FILTER',
    sortBy
  });
  
  export const setSortByDate = () => ({
    type: 'SET_DATE_FILTER'
  });