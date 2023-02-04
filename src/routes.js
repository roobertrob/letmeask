import { useAuth } from 'contexts/AuthContextProvider';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes as RouterRoutes,
} from 'react-router-dom';

const VerifyPrivateRoute = ({ signed = false }) => {
  if (!signed) {
    return <Navigate to="/" replace={true} />;
  }

  return <Outlet />;
};

const Routes = () => {
  const { user } = useAuth();
  const signed = !!user;

  return (
    <BrowserRouter basename="/platforms">
      <RouterRoutes>
        {signed ? (
          <>
            <Route element={<VerifyPrivateRoute signed={signed} />}>
              <Route index element={<Logged />} />
            </Route>
          </>
        ) : (
          <>
            <Route index element={<Home />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/auth/recovery" element={<SentRecoveryEmail />} />
            <Route
              path="/auth/recovery/password"
              element={<PasswordRecovery />}
            />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
