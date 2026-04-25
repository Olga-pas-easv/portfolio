<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen w-full">
    <header class="page-container items-baseline">
      <div
        class="flex justify-between items-center h-full py-4 text-(--color-text)"
      >
        <div class="flex gap-5 items-baseline">
          <RouterLink to="/" class="font-accent text-xl">
            Olga Pasko
          </RouterLink>
          <p
            class="label-caps hidden md:block text-(--color-text-muted) font-normal"
          >
            Multimediedesign
          </p>
        </div>

        <nav class="flex md:gap-8 text-xs tracking-widest gap-4">
          <RouterLink to="/" class="nav-link hidden md:block">Hjem</RouterLink>
          <a href="#projekter" class="nav-link hidden md:block">Projekter</a>
          <!-- <RouterLink to="/om-mig" class="nav-link">Om mig</RouterLink> -->
          <a
            href="/files/cv-olga-pasko.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="nav-link"
          >
            CV
          </a>
        </nav>

        <div class="btn-header">
          <RouterLink to="/kontakt" class="text-xs">Kontakt mig →</RouterLink>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="w-full bg-(--color-text) text-(--color-bg-white)">
      <div class="page-container py-14 md:py-16">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <!-- Left -->
          <div class="md:col-span-5">
            <h3 class="font-accent text-4xl leading-none">Olga Pasko</h3>

            <p class="label-caps mt-3 text-white/40">
              Multimediedesign · Danmark
            </p>

            <p class="mt-6 max-w-[320px] text-sm leading-7 text-white/60">
              Studerende i Multimediedesign med fokus på webdesign, UI/UX og
              visuel kommunikation. Åben for praktik og relevante samarbejder.
            </p>
          </div>

          <!-- Middle -->
          <div class="md:col-span-3">
            <p class="label-caps text-white/40">Sider</p>

            <nav class="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <RouterLink
                to="/"
                class="transition-colors duration-200 hover:text-white"
              >
                Hjem
              </RouterLink>
              <a
                href="/#projekter"
                class="transition-colors duration-200 hover:text-white"
              >
                Projekter
              </a>
              <!-- <RouterLink
                to="/om-mig"
                class="transition-colors duration-200 hover:text-white"
              >
                Om mig
              </RouterLink> -->
              <a
                href="/files/cv-olga-pasko.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors duration-200 hover:text-white"
              >
                CV
              </a>
            </nav>
          </div>

          <!-- Right -->
          <div class="md:col-span-4">
            <p class="label-caps text-white/40">Kontakt</p>

            <div class="mt-5 flex flex-col gap-4">
              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/in/olga-v-pasko/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 text-sm text-white/70 transition-colors duration-200 hover:text-white"
              >
                <span
                  class="flex h-9 w-9 items-center justify-center border border-white/15"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.25 5c0 1.08.88 1.94 1.97 1.94h.03A1.95 1.95 0 0 0 7.22 5 1.95 1.95 0 0 0 5.25 3ZM20.44 13.03c0-3.05-1.63-4.47-3.8-4.47-1.75 0-2.53.97-2.97 1.64V8.5h-3.38c.04 1.12 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.67.13-.91.27-.67.9-1.37 1.95-1.37 1.38 0 1.93 1.04 1.93 2.56V20H21v-6.97Z"
                    />
                  </svg>
                </span>

                <span>LinkedIn profil</span>
              </a>

              <!-- Phone -->
              <a
                href="tel:+4550375202"
                class="flex items-center gap-3 text-sm text-white/70 transition-colors duration-200 hover:text-white"
              >
                <span
                  class="flex h-9 w-9 items-center justify-center border border-white/15"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C10.85 21 3 13.15 3 4c0-.56.44-1 1-1h3.5c.56 0 1 .44 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
                    />
                  </svg>
                </span>

                <span>+45 50·37·52·02</span>
              </a>

              <!-- Email -->
              <a
                href="mailto:olga.v.pasko@gmail.com"
                class="flex items-center gap-3 text-sm text-white/70 transition-colors duration-200 hover:text-white"
              >
                <span
                  class="flex h-9 w-9 items-center justify-center border border-white/15"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      d="M20 4H4a2 2 0 0 0-2 2v.01l10 6.25 10-6.25V6a2 2 0 0 0-2-2Zm0 4.34-7.47 4.67a1 1 0 0 1-1.06 0L4 8.34V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.34Z"
                    />
                  </svg>
                </span>

                <span>olga.v.pasko@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-10 border-t border-white/10 pt-5">
          <div
            class="flex flex-col gap-3 text-[11px] text-white/35 md:flex-row md:items-center md:justify-between"
          >
            <p>© 2026 Olga Pasko. Portfolio — Multimediedesign.</p>

            <a
              href="#top"
              class="transition-colors duration-200 hover:text-white/70"
            >
              Tilbage til toppen
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
