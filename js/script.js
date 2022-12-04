const body = document.querySelector('body');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.getElementById('btn');
const ruBtn = document.getElementById('ru');
const enBtn = document.getElementById('en');
const copyrightsName = document.querySelector('.copyrights__name');
let randomNum;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function getRandomNum() {
  randomNum = getRandomIntInclusive(1, 20);
  return String(randomNum).padStart(2, '0');
}

function setBg(bgNum) {
  body.style.backgroundImage = `url('./assets/img/${bgNum}.jpg')`;
}

ruBtn.addEventListener('click', () => {
  quote.dataset.language = 'ru';
  enBtn.classList.add('unactive');
  ruBtn.classList.remove('unactive');
  copyrightsName.innerText = 'Алексеева Татьяна';
  getDataRu();
});

enBtn.addEventListener('click', () => {
  quote.dataset.language = 'en';
  ruBtn.classList.add('unactive');
  enBtn.classList.remove('unactive');
  copyrightsName.innerText = 'Alekseeva Tatyana';
  getDataEn();
});

async function getDataEn() {
  let quotes = `./js/data-en.json`;
  const res = await fetch(quotes);
  const data = await res.json();
  const randomNum = getRandomIntInclusive(0, data.length - 1);
  quote.innerText = data[randomNum].text;
  author.innerText = data[randomNum].author;
}

async function getDataRu() {
  let quotes = `./js/data-ru.json`;
  const res = await fetch(quotes);
  const data = await res.json();
  const randomNum = getRandomIntInclusive(0, data.length - 1);
  quote.innerText = data[randomNum].text;
  author.innerText = data[randomNum].author;
}

window.addEventListener('load', getDataEn);
btn.addEventListener('click', function () {
  getDataEn();
  setBg(getRandomNum());
});
