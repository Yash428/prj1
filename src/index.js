import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/*const ReactElement = {
  type:'a',
  props: {
      href : 'https://google.com',
      target: '_blank'
  },
  children: 'Click me To visit google'
}
function MyApp(){
  return(
    <div></div>
  )
}*/
const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  'click me to visit google'
)

const anotherElement = (
  <a href='https://google.com' target= '_blank'>visit here</a>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
