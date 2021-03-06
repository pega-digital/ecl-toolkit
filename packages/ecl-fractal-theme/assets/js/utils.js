const $ = global.jQuery;
const config = require('./config');

module.exports = {
  debounce(func, wait, immediate) {
    let timeout;
    return function handleDebounce(...args) {
      const context = this;
      const later = () => {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);

      if (callNow) {
        func.apply(context, args);
      }
    };
  },

  isSmallScreen() {
    return $(document).width() < config.breakpoints.navCollapse;
  },

};
