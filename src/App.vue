<template>
  <div>
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
                            >
                              Designers
                            </a>
                          </li>
                          <li>
                            <a
                              class="list-item"
                              href="https://developers.italia.it"
                              target="_blank"
                            >
                              Developers
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
                        <svg class="icon">
                          <use
                            :xlink:href="`${require('@/assets/sprite.svg')}#it-designers-italia`"
                          ></use>
                        </svg>

                        <div class="it-brand-text">
                          <div class="h5 font-weight-bold no_toc mb-0">
                            Come partecipo
                          </div>
                          <div class="small no_toc d-none d-md-block mb-0">
                            Scopri come contribuire alle community Designers e
                            Developers
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

    <main>
      <div id="app">
        <Wizard />
      </div>
    </main>

    <footer class="fixed-bottom it-footer">
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
                    height="50px"
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
                class="text-decoration-none font-weight-semibold text-white"
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
