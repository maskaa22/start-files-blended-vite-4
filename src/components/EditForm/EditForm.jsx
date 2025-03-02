import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import {editTodo} from '../../redux/todosOperations'

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTodo } from '../../redux/todosSlice';

const EditForm = () => {
  const currentTodo = useSelector(state => state.todos.currentTodo)
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    
        const todoText = e.target.elements.text.value.trim();
        if (!todoText) return;
    
        dispatch(editTodo({ id: currentTodo.id, text: todoText }));
        e.target.reset();
  }

  const cancelEdit = () => {
    dispatch(setCurrentTodo(null))
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelEdit}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
