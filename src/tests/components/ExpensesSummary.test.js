import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with 0 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={0} expenseTotal={0} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with a single expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={100} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={3} expenseTotal={1000} />);
  expect(wrapper).toMatchSnapshot();
});