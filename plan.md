## Завдання

Виконайте рефакторинг застосунку **"TODO LIST"** використовуючи бібліотеку\
управління станом [Redux Toolkit](https://redux-toolkit.js.org/).

### Крок 1

Додайте необхідні npm пакети в проект

```bash
npm install @reduxjs/toolkit react-redux redux-persist
```

- Створіть сховище використовуючи функцію `configureStore()`
- Створіть todoSlice використовуй функцію `createSlice()`

Нехай Redux-state виглядає наступним чином.

```bash
{
  todos: {  items:[] },
}
```

### Крок 2

- Реалізуйте функціонал додавання однієї todo в Redux-state
- Реалізуйте функціонал видалення однієї todo з Redux-state
- Реалізуйте зберігання властивості `items` з основного `state` застосунку в
  `local storage` використовуючи бібліотеку
  [redux-persist](https://www.npmjs.com/package/redux-persist)
- використовуй цей
  [конфіг](https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist)
  для `store`

### Опис компонента `<Todo/>`

Компонент елемента тудушки. Створює компонент наступної структури. Для створення
одного елемента списку потрбно використати універсальний компонент `<GridItem/>`
Компонент `<Todo/>` очікує пропси `id, counter, text`

```jsx
<GridItem>
  <div className={style.box}>
    <Text textAlign="center" marginBottom="20">
      TODO # 1
    </Text>

    <Text>Text todo 1</Text>
    <button className={style.deleteButton} type="button">
      <RiDeleteBinLine size={24} />
    </button>
    <button className={style.editButton} type="button">
      <RiEdit2Line size={24} />
    </button>
  </div>
</GridItem>
```

### Крок 3

- Створіть filterSlice використовуй функцію `createSlice()`

Нехай Redux-state виглядає наступним чином.

```bash
{
  todos: {  items:[] },
  filter: { name: '' },
}
```

- Реалізуйте функціонал додавання значення фільтра в Redux-state
- Додайте функціонал фільтрування todos використовуючи функцію
  `createSelector()`

### Крок 4

- Реалізуйте функціонал редагування однієї todo в Redux-state

Нехай Redux-state виглядає наступним чином.

```bash
{
  todos: {
    items:[],
    currentTodo: null
   },
  filter: '',
}
```

Компонент `<Todo/>` буде мати наступний вигляд

```jsx
<GridItem>
  <div className={style.box}>
    <Text textAlign="center" marginBottom="20">
      TODO # 1
    </Text>

    <Text>Text todo 1</Text>
    <button className={style.deleteButton} type="button">
      <RiDeleteBinLine size={24} />
    </button>
    <button className={style.editButton} type="button">
      <RiEdit2Line size={24} />
    </button>
  </div>
</GridItem>
```

При натисканні на кнопку редагування в Redux-state буде записуватися поточна
todo для редагування.

Додайте умову в Арр для відображення форми додавання todo або редагування

```jsx
{
  !isEdit ? <Form /> : <EditForm />;
}
```

В компоненті ` <EditForm />` початкове значення в інпуті повинен бути текст
поточної todo для редагування.

При натисканні кнопки відміннити todo не редагуємо в Redux-state для currentTodo
записуємо null

При сабміті форми оновляємо дані в Redux-state і у властивість currentTodo
вказуємо null.

На цьому етапі завдання завершене - вітаю🎉
