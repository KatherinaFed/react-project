import { connect } from 'react-redux';

import {
  addPostCreator,
  updatePostTextCreator,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostCreator()),
    updateNewPostText: (text) => dispatch(updatePostTextCreator(text)),
  };
};

// connect возвращает новую контейнерную компоненту
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
