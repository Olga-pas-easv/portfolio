<script setup></script>

<template>
  <section class="page-container py-6 md:py-12">
    <div
      class="grid grid-cols-1 gap-12 border-b border-(--color-border) pb-14 md:grid-cols-12 md:gap-8"
    >
      <!-- Left -->
      <div class="md:col-span-6">
        <p class="label-caps text-(--color-text-light)">Kontakt</p>

        <h1
          class="font-accent mt-4 text-5xl leading-[0.95] text-(--color-text) md:text-7xl"
        >
          Lad os tage <br />
          en snak
        </h1>
      </div>

      <!-- Right -->
      <div class="md:col-span-5 md:col-start-8">
        <p
          class="max-w-[520px] text-sm leading-7 text-(--color-text-body) md:text-base"
        >
          Er du interesseret i et samarbejde, har spørgsmål til mine projekter,
          eller vil du høre mere om, hvad jeg kan bidrage med? Kontakt mig gerne
          via e-mail eller LinkedIn. Jeg ser frem til at høre fra dig!
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span
            class="inline-flex items-center label-caps text-[11px] text-(--color-text-light) border border-(--color-border) px-3 py-2"
          >
            Praktikplads
          </span>

          <span
            class="inline-flex items-center label-caps text-[11px] text-(--color-text-light) border border-(--color-border) px-3 py-2"
          >
            Junior multimediedesigner
          </span>

          <span
            class="inline-flex items-center label-caps text-[11px] text-(--color-text-light) border border-(--color-border) px-3 py-2"
          >
            Studiejob
          </span>
        </div>
      </div>
    </div>
  </section>

  <section class="page-container py-6 md:py-12">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
      <!-- Left title -->
      <div class="grid-cols-1 gap-6 md:col-span-3 pb-6 md:pb-12">
        <h2 class="font-accent text-4xl text-(--color-text) md:text-5xl">
          Kontakt mig
        </h2>
      </div>
      <!-- Contact cards -->
      <div
        class="grid grid-cols-1 gap-6 md:col-span-10 md:grid-cols-2 items-start md:col-start-4"
      >
        <!-- Card 1 -->
        <div
          class="border border-(--color-border) bg-(--color-accent-bg) px-6 py-6"
        >
          <div class="flex flex-col gap-6">
            <!-- Email -->
            <a
              href="mailto:olga@gmail.com"
              class="flex items-center gap-4 text-(--color-text-body) transition-colors duration-200 hover:text-(--color-text)"
            >
              <span
                class="flex h-10 w-10 items-center justify-center text-(--color-text)"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M20 4H4a2 2 0 0 0-2 2v.01l10 6.25 10-6.25V6a2 2 0 0 0-2-2Zm0 4.34-7.47 4.67a1 1 0 0 1-1.06 0L4 8.34V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.34Z"
                  />
                </svg>
              </span>

              <span class="text-lg">olga.v.pasko@gmail.com</span>
            </a>

            <!-- Phone -->
            <a
              href="tel:+4550505050"
              class="flex items-center gap-4 text-(--color-text-body) transition-colors duration-200 hover:text-(--color-text)"
            >
              <span
                class="flex h-10 w-10 items-center justify-center text-(--color-text)"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C10.85 21 3 13.15 3 4c0-.56.44-1 1-1h3.5c.56 0 1 .44 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
                  />
                </svg>
              </span>

              <span class="text-lg">+45 50 37 52 02</span>
            </a>

            <!-- Location -->
            <div class="flex items-center gap-4 text-(--color-text-body)">
              <span
                class="flex h-10 w-10 items-center justify-center text-(--color-text)"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
                  />
                </svg>
              </span>

              <span class="text-lg">Bramming, Danmark</span>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="border border-(--color-border) bg-(--color-accent-bg) px-6 py-6"
        >
          <div class="flex flex-col gap-6">
            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/olga-v-pasko/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between gap-4 text-(--color-text-body) transition-colors duration-200 hover:text-(--color-text)"
            >
              <div class="flex items-center gap-4">
                <span
                  class="flex h-10 w-10 items-center justify-center text-(--color-text)"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.25 5c0 1.08.88 1.94 1.97 1.94h.03A1.95 1.95 0 0 0 7.22 5 1.95 1.95 0 0 0 5.25 3ZM20.44 13.03c0-3.05-1.63-4.47-3.8-4.47-1.75 0-2.53.97-2.97 1.64V8.5h-3.38c.04 1.12 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.67.13-.91.27-.67.9-1.37 1.95-1.37 1.38 0 1.93 1.04 1.93 2.56V20H21v-6.97Z"
                    />
                  </svg>
                </span>

                <span class="text-lg">LinkedIn</span>
              </div>

              <span class="text-sm text-(--color-text-light)">
                linkedin.com/olga-v-pasko
              </span>
            </a>

            <!-- Portfolio -->
            <a
              href="/"
              class="flex items-center justify-between gap-4 text-(--color-text-body) transition-colors duration-200 hover:text-(--color-text)"
            >
              <div class="flex items-center gap-4">
                <span
                  class="flex h-10 w-10 items-center justify-center text-(--color-text)"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.93 9h-3.02a15.9 15.9 0 0 0-1.3-5.02A8.03 8.03 0 0 1 18.93 11ZM12 4.06c.83 1.2 1.9 3.46 2.2 6.94H9.8c.3-3.48 1.37-5.74 2.2-6.94ZM4.07 13h3.02a15.9 15.9 0 0 0 1.3 5.02A8.03 8.03 0 0 1 4.07 13Zm3.02-2H4.07a8.03 8.03 0 0 1 4.32-5.02A15.9 15.9 0 0 0 7.09 11Zm4.91 8.94c-.83-1.2-1.9-3.46-2.2-6.94h4.4c-.3 3.48-1.37 5.74-2.2 6.94ZM15.61 18.02A15.9 15.9 0 0 0 16.91 13h3.02a8.03 8.03 0 0 1-4.32 5.02Z"
                    />
                  </svg>
                </span>

                <span class="text-lg">Portfolio</span>
              </div>

              <span class="text-sm text-(--color-text-light)">
                olga-pasko.dk
              </span>
            </a>

            <!-- Video CV -->

            <a
              href="https://youtu.be/ALEUhwyjcZA"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between gap-4 text-(--color-text-body) transition-colors duration-200 hover:text-(--color-text)"
            >
              <div class="flex items-center gap-4">
                <span
                  class="flex h-10 w-10 items-center justify-center text-(--color-text)"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-6 w-6"
                  >
                    <path d="M8 5.14v14l11-7-11-7Z" />
                  </svg>
                </span>

                <span class="text-lg">Video CV</span>
              </div>

              <span class="text-sm text-(--color-text-light)">
                youtu.be/Olga-cv
              </span>
            </a>

            <!-- CV som PDF -->
            <a
              href="/files/cv-olga-pasko.pdf"
              download
              class="flex items-center justify-between gap-4 text-(--color-text-body) transition-colors duration-200 hover:text-(--color-text)"
            >
              <div class="flex items-center gap-4">
                <span
                  class="flex h-10 w-10 items-center justify-center text-(--color-text)"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-6 w-6"
                  >
                    <path d="M12 16 7 11h3V4h4v7h3l-5 5Zm-7 2h14v2H5v-2Z" />
                  </svg>
                </span>

                <span class="text-lg">CV som PDF</span>
              </div>

              <span class="text-sm text-(--color-text-light)"> Download </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="w-full border-t border-(--color-border)">
    <div class="page-container py-20 md:py-24">
      <div class="mx-auto max-w-[820px] text-center">
        <blockquote
          class="font-accent text-3xl italic leading-[1.3] text-(--color-text) md:text-4xl"
        >
          "Jeg designer ikke for at imponere — jeg designer for at gøre noget
          lettere, klarere eller mere meningsfuldt for den person, der bruger
          det."
        </blockquote>

        <div
          class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="/files/cv-olga-pasko.pdf" download class="btn-secondary">
            Download CV
          </a>

          <RouterLink to="/#projekter" class="btn-primary">
            Se projekter
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
