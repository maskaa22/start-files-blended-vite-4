import Text from '../Text/Text';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { deleteTodo } from '../../redux/todosOperations';
import { useDispatch } from 'react-redux';
import { setCurrentTodo } from '../../redux/todosSlice';

const Todo = ({ todo, number }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const onEditButtonClick =() => {
    dispatch(setCurrentTodo(todo))
  }

  return (
    <>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {number + 1}
        </Text>

        <Text>{todo.text}</Text>
        <button className={style.deleteButton} onClick={onDelete} type="button">
          <RiDeleteBinLine size={24} />
        </button>
        <button className={style.editButton} type="button" onClick={onEditButtonClick}>
          <RiEdit2Line size={24} />
        </button>
        
      </div>
    </>
  );
};

export default Todo;
