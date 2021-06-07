import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={20391024902} />);
    expect(wrapper).toMatchSnapshot();
});