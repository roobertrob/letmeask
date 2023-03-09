import googleIconImg from 'assets/images/google-icon.svg';
import illustrationImg from 'assets/images/illustration.svg';
import logoImg from 'assets/images/logo.svg';
import { Button } from 'components/Button';
import { useAuth } from 'hooks/useAuth';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from 'services/firebase';
import './styles.scss';

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

  return (
    <div id="page-auth">
      <main>
        <div className="main-container">
          <img src={logoImg} alt="Letmeask" />

          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="logotipo do google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              className="alinhar"
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
      <aside>
        <img src={illustrationImg} alt="" />
        <strong> Create your Q&amp;A room</strong>
        <p>And use it to manage questions!</p>
      </aside>
    </div>
  );
};
