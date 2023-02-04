import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  it('should render correctly', () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render button with variant outlined', () => {
    render(<Button isOutlined />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button outlined');
  });
});
