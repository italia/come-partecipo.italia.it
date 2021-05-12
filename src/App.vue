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
                      aria-expanded="false" aria-controls="menu">
                      <span>Dipartimento per la Trasformazione Digitale</span>
                      <svg class="icon">
                        <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                      </svg>
                    </a>

                    <div class="link-list-wrapper collapse" id="menu">
                      <ul class="link-list">
                        <li>
                          <a class="list-item" href="https://designers.italia.it" target="_blank">
                            Designers
                          </a>
                        </li>
                        <li>
                          <a class="list-item" href="https://developers.italia.it" target="_blank">
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
                        <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-code-circle"></use>
                      </svg>

                      <div class="it-brand-text">
                        <div class="h5 font-weight-bold no_toc mb-0">Come partecipo</div>
                        <div class="small no_toc d-none d-md-block mb-0">
                          Scopri come contribuire alle community Designers e Developers
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
</div>
</template>

<script>
import Wizard from './components/Wizard.vue'

export default {
  name: 'App',
  components: {
    Wizard
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
