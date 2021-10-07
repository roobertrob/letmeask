import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/button';
import { useAuth } from '../hooks/useAuth';
export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();
    async function handleCreateRoom() {

        if (!user) {
            await signInWithGoogle();
        }

        history.push('/rooms/new');

    };


    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong> Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas sobre sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-container">
                    <img src={logoImg} alt="Letmeask" />

                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="logotipo do google" />

                        Crie sua sala com o Google

                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form>
                        <input
                            className="alinhar"
                            type="text"
                            placeholder="Digite o código da sala"
                        />

                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
};
