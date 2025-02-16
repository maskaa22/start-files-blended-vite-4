import { useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { changeFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      onChange={onChange}
      name="filter"
    />
  );
};

export default Filter;
