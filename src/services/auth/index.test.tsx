import { mockedValidUser } from 'mocks/user';
import { signInWithGoogle, signOut } from '.';

const mockedSignIn = jest.fn();
const mockedSignOut = jest.fn();

jest.mock('firebase/auth', () => ({
  GoogleAuthProvider: jest.fn(),
  signInWithPopup: () => mockedSignIn(),
  getAuth: () => ({
    signOut: () => mockedSignOut(),
  }),
  browserLocalPersistence: jest.fn(),
  setPersistence: jest.fn(),
  getDatabase: jest.fn(),
}));

describe('signInWithGoogle()', () => {
  afterEach(() => {
    mockedSignIn.mockRestore();
  });

  it('should authenticate user correctly', async () => {
    mockedSignIn.mockReturnValue(mockedValidUser);
    const { user, error } = await signInWithGoogle();

    expect(mockedSignIn).toHaveBeenCalledTimes(1);
    expect(user).toStrictEqual({
      email: mockedValidUser.user.email,
      name: mockedValidUser.user.displayName,
    });
    expect(error).toBeNull();
  });
});

describe('signOut()', () => {
  afterEach(() => {
    mockedSignOut.mockRestore();
  });

  it('should call signOut correctly', async () => {
    await signOut();
    expect(mockedSignOut).toHaveBeenCalledTimes(1);
  });

  it('should throw error if sign out fails', async () => {
    mockedSignOut.mockRejectedValue('Request failed mock');
    await signOut();
    expect(mockedSignOut).toHaveBeenCalledTimes(1);
  });
});
