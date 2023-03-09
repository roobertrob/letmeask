import Routes from 'routes';
import { AuthContextProvider } from './contexts/AuthContext';
import 'styles/global.scss';

const App = () => {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
};

export default App;
