import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todos from './Todos'
import ShowHide from './ShowHide'

const posts= [
  {
    id: 0,
    img: "https://ui.dev/images/content/code-splitting.png",
    text:
      "Code splitting has gained popularity recently for its ability to allow you to split your app into separate bundles your users can progressively load. In this post we’ll take a look at not only what code splitting is and how to do it, but also how to implement it with React Router."
  },
  {
    id: 1,
    img: "https://ui.dev/images/content/composition-vs-inheritance.png",
    text:
      "The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong."
  },
  {
    id: 2,
    img: "https://ui.dev/images/content/modules.png",
    text:
      "I’ve taught JavaScript for a long time to a lot of people. Consistently the most commonly under-learned aspect of the language is the module system. There’s good reason for that. Modules in JavaScript have a strange and erratic history. In this post we’ll walk through that history and you’ll learn modules of the past to better understand how JavaScript modules work today."
  }
]

ReactDOM.render(
  <React.StrictMode>
    <ShowHide posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
