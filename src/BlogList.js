import React from 'react';
import { connect } from 'react-redux';
import Post from './components/Post';

const filtered = (posts, filter) => {
  switch (filter) {
    case 'ALL':
      return posts;
    case 'UNREAD':
      return posts.filter( p => !p.upvote)
    case 'UPVOTED':
      return posts.filter( p => p.upvote)
  }
}

const BlogList = ({ posts }) => (
  <ul>
    { posts.map( (p) => {
        return ( <Post key={p.id} {...p} />  )
    })}
  </ul>
)

const mapStateToProps =(state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(BlogList);