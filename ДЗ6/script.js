const data = JSON.parse(dataInfo);

const blok = document.querySelector('.blok');

data.forEach(element => {
    const item1 = document.createElement('div');
    const img = document.createElement('img');
    const text = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const red = document.createElement('p');

    img.src = element.img;
    h3.textContent = element.h3;
    p.textContent = element.p;
    red.textContent = element.price;

    blok.appendChild(item1);
    item1.appendChild(img);
    item1.appendChild(text);
    text.appendChild(h3);
    text.appendChild(p);
    text.appendChild(red);

    item1.classList.add('item1');
    text.classList.add('text');
    red.classList.add('red');
});