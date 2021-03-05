import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm'

test('renders learn react link', () => {
    render(<NewTodoForm />);
});
  
it('should match snapshot', () => {
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
})