import {setStartDate, 
        setEndDate, 
        setTextFilter, 
        setSortByAmount, 
        setSortByDate} from "../../actions/filters";
import moment from 'moment';


  


 test ('should gen set start date for action object SET_START_DATE' , () => {
const action = setStartDate(moment(0));
expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
});

});


test ('should generate set end date action SET_END_DATE' , () => {
const action = setEndDate(moment(0));
expect(action).toEqual({
    type:'SET_END_DATE',
    endDate: moment(0)
});

});

test('should generate set text action with text value SET_TEXT_FILTER', () => {
    const text = "Bill";
const action = setTextFilter(text);

expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
        
    });
    

});

test('should generate set text action default SET_TEXT_FILTER', () => {
    const action = setTextFilter();
    
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text:''
    
            
        });
        
    });

test ('should generate set sort by amount  SET_AMOUNT_FILTER', () => {
    expect(setSortByAmount()).toEqual({
       type: "SET_AMOUNT_FILTER",
       sortBy:"amount"
});

});

test('should generate set sort by date SET_DATE_FILTER', () => {

 expect(setSortByDate()).toEqual({
type: "SET_DATE_FILTER"
});

});



