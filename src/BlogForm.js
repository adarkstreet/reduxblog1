import React from 'react';
import { connect } from 'react-redux';
import { incId } from './actions/nextId';
import { addPost } from './actions/posts';

class BlogForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { name } = this.state
    const post = { name, upvote: false}
    dispatch(addPost(post))
    dispatch(incId())
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <h3>Write a Post</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}




export default connect(mapStateToProps)(BlogForm);