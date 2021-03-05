import { render } from '@testing-library/react';
import Todo from './Todo'

test('renders learn react link', () => {
    render(<Todo />);
});
  
it('should match snapshot', () => {
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
})