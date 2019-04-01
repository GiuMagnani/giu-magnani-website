// import detectLocale from "./detectLocale";
import locales from "./locales";
import en from "./en";
import es from "./es";

const messages = { en, es };
const defaultKey = Object.keys(locales).find(key => locales[key].default);
const defaultLocale = locales[defaultKey].locale;

export { defaultLocale, messages, locales };
