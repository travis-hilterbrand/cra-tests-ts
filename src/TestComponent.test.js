import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TestComponent from './TestComponent';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent value={'123'} />, div);
});
it('renders without crashing 2', () => {
  shallow(<TestComponent value={'123'} />);
});
it('click event', () => {
  const component = mount(<TestComponent value={'123'} />);
  component.update();
  component.find('button').simulate('click');
  component.unmount();
});
it('change event', () => {
  const component = mount(<TestComponent value={'123'} />);
  component.update();
  component.find('input').simulate('change', {target: {value: '1234'}});
  component.unmount();
});
test('change event 2', async () => {
  let value = '123';
  const { getByRole } = render(<TestComponent value={value} onChange={(event) => value = event.value} />);
  await userEvent.type(getByRole('input'), '1234');
  expect(value).toEqual('1234');
});
