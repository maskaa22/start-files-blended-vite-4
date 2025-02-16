import Text from '../Text/Text';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import Todo from '../Todo/Todo'
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos.items)
  return (
    <>
    
      {/* <Text textAlign="center">We did not find any todo😯</Text> */}
      <Grid>
        {
          todos.map((todo, i) => <GridItem key={todo.id}><Todo todo={todo} number={i}/></GridItem>)
        }
      </Grid>
    </>
  );
};

export default TodoList;
