import Text from '../Text/Text';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import Todo from '../Todo/Todo';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos.items);
  const filter = useSelector(state => state.filter.name);
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <>
      {' '}
      {filteredTodos.length > 0 ? (
        <Grid>
          {filteredTodos.map((todo, i) => (
            <GridItem key={todo.id}>
              <Todo todo={todo} number={i} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};

export default TodoList;
