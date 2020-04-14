import React from 'react';
//import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
//import {SingleDatePicker} from 'react-dates';
import {DatePicker} from "react-datepicker";


const date = moment().format("MMMM Do, YYYY");

console.log(date);



export default class ExpenseForm extends React.PureComponent{
    constructor(props) {
        super(props);

    
    this.state = {
        description: props.expense ? props.expense.description : '',
        note: props.expense ? props.expense.note :'',
        amount: props.expense ? (props.expense.amount/100).toString():'',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        focused: false,
        calendarFocused: false ,
        error: ''
     };
    }

    OnDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    amountValidator = (e) => {
        const amount = e.target.value;
        
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/) ) {
        this.setState(() => ({amount}));
        } 


    };

    onDateChange = (createdAt) => {
        if (createdAt) {
           this.setState(() => ({createdAt}));
        }

    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));

    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
              this.setState(() => ({error:'please provide description and amount.'}));

        } else {
            this.setState(() => ({error:''}));
                this.props.onSubmit({
                    description: this.state.description,
                    amount: parseFloat(this.state.amount, 10) * 100,
                    createdAt: this.state.createdAt.valueOf(),
                    note: this.state.note

                });
                console.log('submitted');
        }
        
    };

    render () {
        return (
            <div>
            <p>{this.state.error}</p>
           <form
           onSubmit={this.onSubmit}
           ><input 
           type="text" 
           placeholder="Description" 
           value={this.state.description}
           autoFocus
           onChange={this.OnDescriptionChange}
           />
           <input 
             type="string"
             value={this.state.amount} 
             placeholder="Amount"
             onChange={this.amountValidator}
           />

           <DatePicker 
           date={this.state.createdAt}
           onDateChange={this.onDateChange}
           focused={this.state.calendarFocused}
           onFocusChange={this.onFocusChange}
           id="expenseformcal"
           numberOfMonths={1}
           isOutsideRange={() => false}

        
           />

           <textarea 
           type='text'
           value={this.state.note}
           placeholder="Add a note for your expense (optional)"  
           onChange={this.onNoteChange}
           
           />
           <button>Add/Edit Expense</button>
           </form>
           </div>
        );
    }
}