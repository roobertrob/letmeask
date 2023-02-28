import { fireEvent, render, screen } from 'utils/tests';
import { RoomCode } from '.';

describe('<RoomCode />', () => {
  it('renders with correct props', () => {
    const code = 'ABCD1234';
    render(<RoomCode code={code} />);
    expect(screen.findAllByAltText('Copy room code')).toBeInTheDocument;
    expect(screen.getByText(`Sala #${code}`)).toBeInTheDocument;
  });
  it('copyRoomCodeToClipboard function is called on click', () => {
    const code = 'ABCD1234';
    const copyRoomCodeToClipboard = jest.fn();
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: copyRoomCodeToClipboard },
    });
    render(<RoomCode code={code} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(copyRoomCodeToClipboard).toHaveBeenCalled();
    expect(copyRoomCodeToClipboard).toHaveBeenCalledWith(code);
  });
});
