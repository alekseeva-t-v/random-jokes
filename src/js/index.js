import changeLang from './modules/change-lang';
import showQuote from './modules/quote';

const lang = window.location.hash.substr(1);

changeLang();
showQuote(lang);
