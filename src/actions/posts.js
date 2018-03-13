export const addPost = (post) => {
  return { type: 'ADD_POST', post }
}

export const togglePost = (id) => {
  return { type: 'TOGGLE_POST', id }
}
