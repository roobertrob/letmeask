
const firebaseMock = jest.genMockFromModule('firebase');

const authMock = {
  signInWithPopup: jest.fn(),
  onAuthStateChanged: jest.fn(),
};

firebaseMock.auth.mockImplementation(() => authMock);

module.exports = firebaseMock;
