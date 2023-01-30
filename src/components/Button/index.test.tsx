import { render } from 'utils/tests';
import { Button } from '.';

describe('<Button />', () => {
  it('should render correctly', () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toMatchSnapshot();
  });
});
