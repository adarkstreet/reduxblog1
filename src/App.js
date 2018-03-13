import React from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import Footer from './Footer';
import './App.css';

const App = () => (
  <div className="Redux Blog">
    <BlogForm />
    <BlogList />
    <Footer />
  </div>
)

export default App;
