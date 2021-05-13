<template>
  <div id="app">
    <div class="skiplinks">
      <a class="sr-only sr-only-focusable" href="#content">Vai al contenuto principale</a>
      <a class="sr-only sr-only-focusable" href="#footer">Vai a piè di pagina</a>
    </div>
    <header>
      <div class="it-header-wrapper">
        <div class="it-header-slim-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="it-header-slim-wrapper-content">
                  <a
                    class="d-none d-lg-block navbar-brand"
                    href="https://innovazione.gov.it/dipartimento/"
                    rel="noopener"
                  >
                    Dipartimento per la Trasformazione Digitale
                  </a>
                  <div class="nav-mobile">
                    <nav>
                      <a
                        class="it-opener d-lg-none"
                        data-toggle="collapse"
                        href="#menu"
                        role="button"
                        aria-expanded="false"
                        aria-controls="menu"
                      >
                        <span>Dipartimento per la Trasformazione Digitale</span>
                      </a>

                      <div class="link-list-wrapper collapse" id="menu">
                        <ul class="link-list">
                          <li>
                            <a
                              class="list-item"
                              href="https://designers.italia.it"
                              target="_blank"
                              aria-label="Sito di Designers Italia (collegamento esterno)"
                              rel="noopener"
                            >
                              Designers
                              <o-icon class="icon d-inline-flex" icon="external-link"></o-icon>
                            </a>
                          </li>
                          <li>
                            <a
                              class="list-item"
                              href="https://developers.italia.it"
                              target="_blank"
                              aria-label="Sito di Developers Italia (collegamento esterno)"
                              rel="noopener"
                            >
                              Developers
                              <o-icon class="icon d-inline-flex" icon="external-link"></o-icon>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="it-nav-wrapper">
          <div class="it-header-center-wrapper it-small-header">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="it-header-center-content-wrapper">
                    <div class="it-brand-wrapper ">
                      <a href="/">
                        <o-icon class="icon" icon="designers-italia"></o-icon>
                        <div class="it-brand-text">
                          <div class="h5 font-weight-bold no_toc mb-0">
                            Come partecipo
                          </div>
                          <div class="small no_toc d-none d-md-block mb-0">
                            Scopri come contribuire al miglioramento dei servizi pubblici digitali del Paese
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main id="content" class="container py-5">
      <Wizard />
    </main>

    <footer id="footer" class="it-footer pt-5">
      <div class="it-footer-main">
        <div class="container text-center text-md-left">
          <div class="row">
            <div class="col-12 d-flex flex-column flex-md-row py-4">
              <div class="py-3">
                <a
                  href="https://innovazione.gov.it/dipartimento/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Dipartimento per la Trasformazione Digitale (collegamento esterno)"
                >
                  <img
                    src="@/assets/dtd-logo.svg"
                    alt="Logo Dipartimento per la Trasformazione Digitale"
                    height="50"
                    width="272"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="row pb-4">
            <div class="col-12 small">
              Per segnalazioni ed eventuali suggerimenti sull'accessibilità del
              sito, scrivi a
              <a
                class="font-weight-semibold text-white"
                href="mailto:accessibilita@innovazione.gov.it"
                aria-label="accessibilita@innovazione.gov.it"
              >
                accessibilita@innovazione.gov.it
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="it-footer-small-prints py-4">
        <div class="container">
          <ul class="list-inline link-list mb-0 text-center text-md-left">
            <li class="list-inline-item mr-0 mr-md-5">
              <a
                href="https://www.governo.it/note-legali"
                target="_blank"
                rel="noreferrer"
                aria-label="Note legali (collegamento esterno)"
                class="list-item mid-footer-link mx-4 mx-md-0"
              >
                Note legali
              </a>
            </li>
            <li class="list-inline-item mr-0 mr-md-5">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Dichiarazione di accessibilità (collegamento esterno)"
                class="list-item mid-footer-link mx-4 mx-md-0"
              >
                Dichiarazione di accessibilità
              </a>
            </li>
            <li class="list-inline-item mr-0 mr-md-5 float-right">
              <a
                href="https://github.com/italia/wizard-italia"
                aria-label="Sorgente del sito su GitHub (collegamento esterno)"
                title="Sorgente del sito su GitHub (collegamento esterno)"
                target="_blank"
                rel="noreferrer,noopener"
              >
                <o-icon class="icon icon-white inline px-0" icon="github"></o-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Wizard from "./components/Wizard.vue";

export default {
  name: "App",
  components: {
    Wizard
  }
};
</script>

<style>
#app {
  display:flex;
  flex-direction:column;
  height:100vh;
  margin:0;
}
main {
  text-align: center;
  color: #2c3e50;
}
footer {
  margin-top:auto;
}
article.reply > h2 {
  font-size: 1.555rem;
}
article.reply > h3 {
  font-size: 1.333rem;
}
</style>
