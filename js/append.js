const mainContainer = document.getElementById('main-container')


const placeHolder = document.createElement('section');

const h1=document.createElement('h1');
h1.innerText='kire pagla kemon asos';

placeHolder.appendChild(h1);

const ul= document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText='kha mamla';

ul.appendChild(li1);
placeHolder.appendChild(ul);

const li2 =document.createElement('li');
li2.innerText='lungi shamla';

ul.appendChild(li2);
placeHolder.appendChild(ul);

mainContainer.appendChild(placeHolder);


//easier html
 const bookStation = document.createElement('section');

 bookStation.innerHTML =`
  <h1>Book shop</h1>
  <ul>
    <li>oporichirta</li>
    <li>oporichirta</li>
    <li>oporichirta</li>
    <li>oporichirta</li>
    <li>oporichirta</li>
    <li>oporichirta</li>

    </ul>
`

mainContainer.appendChild(bookStation);