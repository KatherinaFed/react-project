import profileReducer, { addPostCreator, deletePostCreator } from '../redux/profileReducer';

test('new post added', () => {
  // 1. Test data (prepare initial data)
  const state = {
    posts: [
      { id: 1, message: 'Hi, how are you?', likes: 15 },
      { id: 2, message: 'My first post', likes: 20 },
    ],
  };

  const action = addPostCreator('Hello, world!');

  // 2. Action
  const newState = profileReducer(state, action);

  // 3. Expectation
  expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
  // 1. Test data (prepare initial data)
  const state = {
    posts: [
      { id: 1, message: 'Hi, how are you?', likes: 15 },
      { id: 2, message: 'My first post', likes: 20 },
    ],
  };

  const action = addPostCreator('Hello, world!');

  // 2. Action
  const newState = profileReducer(state, action);

  // 3. Expectation
  expect(newState.posts[2].message).toBe('Hello, world!');
});

test('delete the post', () => {
  // 1. Test data (prepare initial data)
  const state = {
    posts: [
      { id: 1, message: 'Hi, how are you?', likes: 15 },
      { id: 2, message: 'My first post', likes: 20 },
    ],
  };

  const action = deletePostCreator(1);

  // 2. Action
  const newState = profileReducer(state, action);

  // 3. Expectation
  expect(newState.posts.length).toBe(1);
});
