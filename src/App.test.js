import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("this should work but it doesnt", () => {
  const onSubmit = jest.fn();
  const component = mount(<App onSubmit={onSubmit}/>);

  component.find('button').simulate('click');

  expect(onSubmit).toBeCalled();
});

it("this works as expected", () => {
  const onSubmit = jest.fn();
  const component = mount(<App onSubmit={onSubmit}/>);

  component.find('form').simulate('submit');

  expect(onSubmit).toBeCalled();
});
