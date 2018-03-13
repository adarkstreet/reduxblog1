import React from 'react';
import { connect } from 'react-redux';
import { togglePost } from '../actions/posts';

const Post = ({ id, name, upvote, dispatch }) => (
  <li
    onClick={() => dispatch(togglePost(id)) }
    style={ upvote ? {textDecoration: 'bold', color: 'green' } : [] }
  >
    {name}
  </li>
)

export default connect()(Post);