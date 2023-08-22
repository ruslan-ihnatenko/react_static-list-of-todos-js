import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

// Add the required props
export const TodoInfo = ({ todo }) => (
  <>
    <article className={todo.completed ? `TodoInfo TodoInfo--completed` : 'TodoInfo'}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} key={todo.user.id} />
    </article>
  </>
);