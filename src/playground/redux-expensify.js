

import uuid from "uuid";






//expenses reducer



//Get Visble Expenses

//Store



store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
const expenseTwo = store.dispatch(
  addExpense({
    id: "coffee",
    description: "Coffee",
    amount: 300,
    createdAt: -1000,
  })
);
const expenseOne = store.dispatch(
  addExpense({ id: "rent", description: "Rent", amount: 10000, createdAt: -2100 })
);

//store.dispatch(removeExpense ({  id: expenseOne.expense.id }));
//store.dispatch(editExpense (  expenseTwo.expense.id, { amount:500 }));
//store.dispatch(editStartDate (  expenseTwo.expense.id, { startDate:100 }));

//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter(''));
store.dispatch(setSortByAmount("amount")); //amount

//store.dispatch(setSortByDate()); //date
//store.dispatch(setStartDate(0));
//store.dispatch(setEndDate(1250));
//store.dispatch(setTextFilter('rent'));

const demoState = {
  expenses: [
    {
      id: "sdfsdfds",
      description: "my rent",
      note: "This was the final payment",
      rent: "this is my crazee money",
      createdAt: 1500,
      amount: 545000,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

// console.log(store.getState());
