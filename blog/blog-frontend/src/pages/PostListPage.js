import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PostList from '../components/posts/PostList';
import PaginationContainer from '../containers/posts/PaginationContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer/>
      <PostListContainer/>
      <PaginationContainer/>
    </>
  );
};

export default PostListPage;