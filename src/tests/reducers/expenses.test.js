import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import uuid from 'uuid';


test('default state ', () => {
    
    const state = expensesReducer(undefined,{type:'@@INIT'});
    
    expect(state).toEqual([]);
});

//remove expense
test('should edit expense REMOVE by edit', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([ expenses[0], expenses[2]]);
});

//remove expense if not found
test('should fail to edit expense REMOVE by edit', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

//add expense
test('should add expense ADD ', () => {
    const expense = {
        id: uuid,
        description:'chocolate',
        note:'',
        createdAt:20000,
        amount: 295000
    };
    const action = {
        type:'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
});

// test edit expense w/ valid and invalid 

test ('should edit an expense',() => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }

    };
    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toBe(amount);

});


test ('should NOT edit an expense',() => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            amount
        }

    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);

});


