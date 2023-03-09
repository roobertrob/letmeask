export type User = {
  displayName: string;
  photoURL: string;
  uid: string;
};

export type SignInProps = {
  user: User | null;
  error: unknown;
};
