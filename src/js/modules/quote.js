/**
 * Отображает на странице блок цитаты.
 *
 * @param {string} lang Язык отображения.
 */
function showQuote(lang) {
  const quoteWrapper = document.querySelector('.quote__inner');
  const quoteContainer = document.querySelector('.quote__container')
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const btn = document.getElementById('btn');
  const preloader = document.getElementById('preloader')

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
    const URL = `./files/json/quote-${lang}.json`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Something went wrong...');
      }
      const data = await response.json();
      const randomNum = getRandomIntInclusive(0, data.length - 1);
      quote.innerText = data[randomNum].text;
      author.innerText = data[randomNum].author;
      preloader.remove();
      quoteContainer.style.display = 'block';
    } catch {
      quoteWrapper.textContent = '';
    }
  }

  /**
   * Обновляет цитату и фоновое изображение.
   *
   */
  function quoteUpdate() {
    getQuote();
    const bgNum = getRandomNum();
    const img = new Image();
    img.src = `./img/jpg/${bgNum}.jpg`;
    img.addEventListener('load', () => {
      quoteWrapper.style.backgroundImage = `url(${img.src})`;
    });
  }

  btn.addEventListener('click', quoteUpdate);

  window.addEventListener('load', quoteUpdate);
}

export default showQuote;
