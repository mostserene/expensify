
import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test ('should Render ExpenseList with expenses correctly',() => {
     
       const wrapper = shallow(<ExpenseList expenses={expenses} />);
       expect(wrapper).toMatchSnapshot();


});