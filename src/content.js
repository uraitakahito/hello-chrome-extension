import message from './imported';

console.log('Hello, content.js!');
console.log(message);

document.querySelector('#Masthead').innerHTML = `
  <div>
    <b>Hello, Yahoo!</b>
    <br>
    <b>${message}</b>
  </div>
`;
