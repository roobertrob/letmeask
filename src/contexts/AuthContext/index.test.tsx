// import { renderHook, act } from '@testing-library/react-hooks';
// import { AuthContext, AuthContextProvider } from 'contexts/AuthContext';
// import { useAuth } from 'hooks/useAuth';
// import { ReactNode } from 'react';

// const mockedSignIn = jest.fn();
// const mockedSignOut = jest.fn();

// describe('useAuth hook', () => {
//   // it('should return the initial user state as undefined', () => {
//   //   const { result } = renderHook(() => useAuth(), {
//   //     wrapper: AuthContextProvider,
//   //   });
//   //   expect(result.current.user).toBeUndefined();
//   // });
//   // it('should set the user state when a user signs in', async () => {
//   //   const mockUser = {
//   //     id: '123',
//   //     name: 'John Doe',
//   //     avatar: 'https://example.com/avatar.png',
//   //   };
//   //   const signInWithGoogleMock = jest
//   //     .fn()
//   //     .mockResolvedValueOnce({ user: mockUser });
//   //   const wrapper = (children: ReactNode) => (
//   //     <AuthContext.Provider
//   //       value={{ user: undefined, signInWithGoogle: signInWithGoogleMock }}
//   //     >
//   //       {children}
//   //     </AuthContext.Provider>
//   //   );
//   //   const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
//   //     wrapper,
//   //   });
//   //   act(() => {
//   //     result.current.signInWithGoogle();
//   //   });
//   //   await waitForNextUpdate();
//   //   expect(firebaseMock.signInWithGoogleMock).toHaveBeenCalled();
//   //   expect(firebaseMock.result.current.user).toEqual(mockUser);
//   // });
//   // it('should throw an error when missing user information from Google', async () => {
//   //   const signInWithGoogleMock = jest
//   //     .fn()
//   //     .mockResolvedValueOnce({ user: { displayName: 'John Doe' } });
//   //   const wrapper = (children: ReactNode) => (
//   //     <AuthContext.Provider
//   //       value={{ user: undefined, signInWithGoogle: signInWithGoogleMock }}
//   //     >
//   //       {children}
//   //     </AuthContext.Provider>
//   //   );
//   //   const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
//   //     wrapper,
//   //   });
//   //   act(() => {
//   //     result.current.signInWithGoogle();
//   //   });
//   //   await waitForNextUpdate();
//   //   expect(firebaseMock.signInWithGoogleMock).toHaveBeenCalled();
//   //   expect(firebaseMock.result.error).toEqual(
//   //     new Error('Missing information from Google Account.'),
//   //   );
//   // });
// });
