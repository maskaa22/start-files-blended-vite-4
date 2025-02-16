import { useSelector } from 'react-redux';
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import TodoList from './components/TodoList/TodoList';

export const App = () => {
  const todos = useSelector(state => state.todos.items);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
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
