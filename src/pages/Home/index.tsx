import googleIconImg from 'assets/images/google-icon.svg';
import illustrationImg from 'assets/images/illustration.svg';
import logoImg from 'assets/images/logo.png';
import { Button } from 'components/Button';
import { useAuth } from 'hooks/useAuth';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from 'services/firebase';
import './styles.scss';
import Carousel from 'components/Carrousel';

export const Home = () => {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    navigate('/rooms/new');
  }
  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }
    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed.');
      return;
    }
    navigate(`/rooms/${roomCode}`);
  }
  const images = [
    'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/07/Anitta.jpg',
    'https://i.iheart.com/v3/re/assets.getty/60a7dbb0657f074c65ec016f',
    'https://capricho.abril.com.br/wp-content/uploads/2016/09/little-mix-victoria-monet-turne-ariana-grande.jpg?quality=70&strip=all',
    'https://images.alphacoders.com/826/82621.jpg',
  ];
  return (
    <div id="page-auth">
      <main>
        <div className="main-container">
          <img src={logoImg} alt="" />

          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="" />
            Create room with google
          </button>
          <div className="separator">Or join in a existent room</div>

          <form onSubmit={handleJoinRoom}>
            <input
              className="alinhar"
              type="text"
              placeholder="Type room code"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type="submit" disabled={!roomCode}>
              Join room
            </Button>
          </form>
        </div>
      </main>
      <aside>
        <Carousel images={images} />
      </aside>
    </div>
  );
};
