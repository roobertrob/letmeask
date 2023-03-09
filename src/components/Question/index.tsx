import cx from 'classnames';
import { ReactNode } from 'react';
import './styles.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighLighted?: boolean;
};

export const Question = ({
  content,
  author,
  children,
  isAnswered = false,
  isHighLighted = false,
}: QuestionProps) => {
  return (
    <div
      className={cx(
        'question',
        { answered: isAnswered },
        { highLighted: isHighLighted && !isAnswered },
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author?.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
};
