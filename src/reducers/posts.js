
const posts = (state = [], action) => {
  switch(action.type) {
    case 'POSTS':
      return action.posts
    case 'ADD_POST':
      return [action.post, ...state];
    case 'TOGGLE_POST':
      return state.map( post => {
        if (post.id === action.id)
          return {...post, upvote: !post.upvote}
        return post
      })
    default:
      return state
  }
}

export default posts;