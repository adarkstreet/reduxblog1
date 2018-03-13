import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <div>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Upvoted</FilterLink>
    {' '}
    <FilterLink>Unread</FilterLink>
  </div>
)
export default Footer;