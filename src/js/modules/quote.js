/**
 * Отображает на странице блок цитаты.
 *
 * @param {string} lang Язык отображения.
 */
function showQuote(lang) {
  const main = document.querySelector('main');
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const btn = document.getElementById('btn');

  let randomNum;

  /**
   * Возвращает случайное число в заданном интервале включительно.
   *
   * @param {number} min Минимальное число диапазона.
   * @param {number} max Максимальное число диапазона.
   * @return {number} Случайное целое число из заданного диапазона.
   */
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Возвращает случайное число в заданном формате.
   *
   * @return {string} Случайное число в заданном строковом формате.
   */
  function getRandomNum() {
    randomNum = getRandomIntInclusive(1, 20);
    return String(randomNum).padStart(2, '0');
  }

  /**
   * Получает цитату и выводит ее на странице.
   *
   */
  async function getQuote() {
    let quotes = `./files/json/quote-${lang}.json`;
    const res = await fetch(quotes);
    const data = await res.json();
    const randomNum = getRandomIntInclusive(0, data.length - 1);
    quote.innerText = data[randomNum].text;
    author.innerText = data[randomNum].author;
  }

  /**
   * Обновляет цитату и фоновое изображение.
   *
   */
  function quoteUpdate() {
    getQuote();
    const bgNum = getRandomNum();
    main.style.backgroundImage = `url('../img/${bgNum}.jpg')`;
  }

  btn.addEventListener('click', quoteUpdate);

  window.addEventListener('load', quoteUpdate);
}

export default showQuote;
