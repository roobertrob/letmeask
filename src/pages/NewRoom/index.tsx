import logoImg from 'assets/images/logo.svg';
import { Button } from 'components/Button';
import { useAuth } from 'hooks/useAuth';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { database } from 'services/firebase';
import './styles.scss';

export const NewRoom = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    navigate(`/admin/rooms/${firebaseRoom.key}`);
  }

  return (
    <div id="page-auth">
      <main>
        <div className="main-container">
          <h1>Hey, {user?.name}</h1>
          <h2>Choose your room name </h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Room name"
              onChange={(event) => setNewRoom(event.target.value)}
            />

            <Button type="submit" disabled={!newRoom}>
              Create room
            </Button>
          </form>
          <p>
            You wanna join in a existent room? <Link to="/">Click here</Link>{' '}
          </p>
        </div>
      </main>
      <aside>
        <img src={logoImg} alt="" />
      </aside>
    </div>
  );
};
