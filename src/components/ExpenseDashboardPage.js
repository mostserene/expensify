
import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
    <ExpenseListFilters />
    <ExpenseList />
    <ExpenseListItem />
    
    </div>
);

export default ExpenseDashboardPage;

