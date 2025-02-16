import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { addTodo } from '../../redux/todosSlice';
import { useDispatch } from 'react-redux';

const Form = () => {

  const dispatch = useDispatch()

  const handleAdd = (e) => {
    e.preventDefault();

    const todoText = e.target.elements.search.value.trim();
    if(!todoText) return;
    
    dispatch(addTodo({id: crypto.randomUUID(), text:todoText}));
  }
  return (
    <form className={style.form} onSubmit={handleAdd}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
