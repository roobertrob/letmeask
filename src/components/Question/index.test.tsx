import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Question } from '.';

describe('<Question />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Question content="anything" author={{ avatar: '', name: '' }} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render with props', () => {
    render(
      <Question
        content="anything"
        author={{ avatar: 'https://avatar.com', name: 'John Doe' }}
      />,
    );
    expect(screen.getByText(/anything/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'John Doe');
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://avatar.com',
    );
  });
});
