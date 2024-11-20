import { render, screen } from '@testing-library/react';
import Header from './Header';
import { setupServer } from 'msw/browser';
import { handlers } from '../mocks/handler'
 
export const server = setupServer(...handlers)

test('renders learn react link', () => {
  const { container } = render(<Header />);
  const header = screen.getByText(/Header/i);
  expect(container).toMatchSnapshot()
  expect(header).toBeInTheDocument();
});
