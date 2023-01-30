import { render } from 'utils/tests';
import { Question } from '.';

describe('<Button />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Question content="anything" author={{ avatar: '', name: '' }} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
