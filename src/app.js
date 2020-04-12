import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.js';
import {Provider} from 'react-redux';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';


//this file is in git 


const store = configureStore();


  

//const getVisibleExpenses = this.getVisibleExpenses();
console.log(store.getState());

const exp1 = { description: "Water Bill",
amount: 4500,
createdAt: 0};
   store.dispatch(
    addExpense( exp1)
  );


  const expenseOne = store.dispatch(
    addExpense({ description: "Gas Bill", amount: 10000, createdAt: 2100 })
  );
  const expenseThree = store.dispatch(
    addExpense({ description: "Rent Bill", amount: 109500, createdAt: 100 })
  );
  //store.dispatch(setTextFilter('water'));
 
//setTimeout (() => {
//  store.dispatch(setTextFilter('bill'));
//}, 3000);

  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log( visibleExpenses);
 console.log(store.getState());
const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
