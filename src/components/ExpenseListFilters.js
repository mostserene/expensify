import React from "react";
import { connect } from "react-redux";

import moment from 'moment';
import {setTextFilter, setSortByAmount, 
  setSortByDate, 
  setStartDate, 
  setEndDate} 
from "../actions/filters";
//import 'react-dates/initialize';
import { DateRangePicker, DayPickerRangeController } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';


class ExpenseListFilters extends React.Component {
    state = {
      calenderFocused: null,

   };

  
 
onDatesChange = ({startDate, endDate}) => {
        
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate)); 
};

onFocusChange = (calenderFocused) => {
  this.setState(() => ({calenderFocused}));
}

render () {
  return (
  <div>
  <input 
  type="text" 
  value={this.props.filters.text} onChange={ (e) => {
      this.props.dispatch(setTextFilter(e.target.value));


  }} />

   <select  onChange={ (e) => {
     if (e.target.value === 'date') {
       this.props.dispatch(setSortByDate()); 
      }   else if (e.target.value === 'amount') {
         this.props.dispatch(setSortByAmount()); 
      } 
    }
    } >
     <option value={this.props.filters.sortBy}> Date  
     </option>
   
  <option value='amount' onChange={ (e) => {
    this.props.dispatch(setTextFilter('amount'));

    }}>Amount

    </option>
     </select>
      <DateRangePicker     
      startDate={this.props.filters.startDate}
      endDate={this.props.filters.endDate }
     focusedInput= {this.state.calenderFocused}
      onFocusChange={this.onFocusChange}
      numberOfMonths={1}
     isOutsideRange={() => false}
     endDateId='1'
      startDateId='100'
      showClearDates={true}
      onDatesChange={this.onDatesChange}
      />

</div>

  );
}

}






const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
