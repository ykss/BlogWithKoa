import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import PostListContainer from '../containers/posts/PostListContainer';

function PostListPage() {
  return (
    <div>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </div>
  );
}

export default PostListPage;
