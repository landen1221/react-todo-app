import { render } from '@testing-library/react';
import TodoList from './TodoList'

test('renders learn react link', () => {
    render(<TodoList />);
});
  
it('should match snapshot', () => {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})