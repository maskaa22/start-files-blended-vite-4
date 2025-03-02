import { useSelector, useDispatch } from 'react-redux';
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import TodoList from './components/TodoList/TodoList';
import Filter from './components/Filter/Filter';
import { fetchTodos } from './redux/todosOperations';
import { useEffect } from 'react';
import EditForm from './components/EditForm/EditForm'

export const App = () => {
  const todos = useSelector(state => state.todos.items);
  const currentTodo = useSelector(state => state.todos.currentTodo)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {
            !currentTodo ? <Form /> : <EditForm />
          }
         
          <Filter />
          {todos.length ? (
            <TodoList />
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
