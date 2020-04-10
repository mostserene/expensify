import filtersReducer from '../../reducers/filters';

import moment from 'moment';




 //@@INIT

 test('should set up default filter vals', () => {
     const state = filtersReducer(undefined,{type:'@@INIT'});
     expect (state).toEqual({
         text:'',
         sortBy:'date',
         startDate:moment().startOf('month'),
         endDate: moment().endOf('month')
     });
 });

test('should set sortBy to amount ' , () => {
   const state=filtersReducer(undefined,{type: 'SET_AMOUNT_FILTER'});
   expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date ' , () => {
    
    const currentState = {
        text: '',
        startDate:undefined,
        endDate: undefined,
        sortBy:'amount'  //THIS IS THE TEST !  TO GET IT TO SWAP

    };
    const action = {type:'SET_DATE_FILTER'};  //like a dispatch
    const state=filtersReducer(currentState,action);  
    expect(state.sortBy).toBe('date');
 });

 //should set text filter
 test('should set text data vals', () => {
     const text = 'This is test filter';
     const action = {type:'SET_TEXT_FILTER', text};
    const state = filtersReducer(undefined,action);

    expect (state.text).toBe (text);
});

 //should set start date
 
 test('should set start date filter', () => {
    const startDate = moment();
    const action = {type:'SET_START_DATE',startDate}; 
    const state = filtersReducer(undefined,action);
    expect (state.startDate).toEqual(startDate);
}); 

 //should set end date 
 
 test('should set end date filter', () => {
    const endDate = moment();
    const action = {type:'SET_END_DATE', endDate}; 
    const state = filtersReducer(undefined,action);
    expect (state.endDate).toEqual(endDate);
});  