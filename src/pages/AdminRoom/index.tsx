import answerImg from 'assets/images/answer.svg';
import checkImg from 'assets/images/check.svg';
import deleteImg from 'assets/images/delete.svg';
import logoImg from 'assets/images/logo.png';
import { Button } from 'components/Button';
import { Question } from 'components/Question';
import { RoomCode } from 'components/RoomCode';
import { useRoom } from 'hooks/useRoom';
import { useNavigate, useParams } from 'react-router-dom';
import { database } from 'services/firebase';
import './styles.scss';

type RoomParams = {
  id: string;
};

export const AdminRoom = () => {
  const navigate = useNavigate();
  const params = useParams<RoomParams>();

  const roomId = params.id || '';
  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({ endedAt: new Date() });
    navigate('/');
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighLighted: true,
    });
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Are you sure do you wanna delete this question?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <div>
            <img src={logoImg} alt="" id="logo-img" />
          </div>
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              End room
            </Button>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Room {title}</h1>
          {questions.length > 0 && <span> {questions.length} question(s)</span>}
        </div>

        <div className="question-list">
          {questions.length > 0 ? (
            questions.map((question) => {
              return (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighLighted={question.isHighLighted}
                >
                  {!question.isAnswered && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          handleCheckQuestionAsAnswered(question.id)
                        }
                      >
                        <img src={checkImg} alt="check as answered" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <img src={answerImg} alt="Highlight question" />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <img src={deleteImg} alt="Remove Question" />
                  </button>
                </Question>
              );
            })
          ) : (
            <div>No questions</div>
          )}
        </div>
      </main>
    </div>
  );
};
