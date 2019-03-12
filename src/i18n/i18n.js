// import detectLocale from "./detectLocale";
import languages from "./languages";
import en from "./en.json";
import es from "./es.json";
const messages = { en, es };

const defaultKey = Object.keys(languages).find(key => languages[key].default);
const defaultLocale = languages[defaultKey].locale;

export { defaultLocale, messages, languages };
