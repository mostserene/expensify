import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test("selector should filter by text SELECT_EXPENSES", () => {
  const filters = {
    text: "Credit",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2]]);
});

test('test should filter by START_DATE', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2],expenses[0]]);
});

test('test should filter by END_DATE', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days'),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});

test('test should filter by DATE', () => {
  const filters = {
    text: "",
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});

test('test should filter by AMOUNT', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
});

