import React from 'react';
import PostList from '../components/post/PostList';
import HeaderContainer from '../containers/common/HeaderContainer';

function PostListPage() {
  return (
    <div>
      <HeaderContainer />
      <PostList />
    </div>
  );
}

export default PostListPage;
