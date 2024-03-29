import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';
import { AdminRoom } from './pages/AdminRoom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" index element={<Home />} />
        <Route path="/rooms/new" index element={<NewRoom />} />
        <Route path="/rooms/:id" element={<Room />} />
        <Route path="/admin/rooms/:id" element={<AdminRoom />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
