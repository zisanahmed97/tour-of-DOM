//create element and set inner text or innerHtml
const newChild = document.createElement('li');
newChild.innerText='new born footballer here';

//find the parent where you will add the child
const playerList = document.getElementById('player-list');

//append the child to the parent
playerList.appendChild(newChild);