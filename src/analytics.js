const logAction = (action, choice) => {
  /* eslint-disable no-underscore-dangle */
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push([
      'trackEvent',
      action,
      choice,
      `page : ${window.location.pathname}`,
    ]);
  }
  /* eslint-enable no-underscore-dangle */
};

const initMatomo = () => {
  /* eslint-disable */
  const _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function () {
    const u = 'https://ingestion.webanalytics.italia.it/';
    _paq.push(['setTrackerUrl', `${u}matomo.php`]);
    _paq.push(['setSiteId', 'wBEpDzz0yL']);
    const d = document; const g = d.createElement('script'); const
      s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript'; g.async = true; g.src = `${u}matomo.js`; s.parentNode.insertBefore(g, s);
  }());
  /* eslint-enable */
};

export {
  initMatomo,
  logAction,
};
