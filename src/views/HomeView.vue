<script setup>
import { computed, ref } from 'vue';
import heroPhoto from '@/assets/image/hero-photo.jpg';
import fotoAbout from '@/assets/image/foto-about.jpg';

import {
  primaryProjects,
  otherProjects,
  visualGallery,
} from '../data/projects.js';

const visibleStartIndex = ref(0);
const isLightboxOpen = ref(false);
const activeImageIndex = ref(0);

const visibleVisualImages = computed(() => {
  if (!visualGallery?.images?.length) return [];

  const images = visualGallery.images;
  const result = [];

  for (let i = 0; i < 3; i++) {
    const index = (visibleStartIndex.value + i) % images.length;
    result.push({
      ...images[index],
      originalIndex: index,
    });
  }

  return result;
});

function showNextVisuals() {
  if (!visualGallery?.images?.length) return;
  visibleStartIndex.value =
    (visibleStartIndex.value + 1) % visualGallery.images.length;
}

function showPrevVisuals() {
  if (!visualGallery?.images?.length) return;
  visibleStartIndex.value =
    (visibleStartIndex.value - 1 + visualGallery.images.length) %
    visualGallery.images.length;
}

function openLightbox(index) {
  activeImageIndex.value = index;
  isLightboxOpen.value = true;
}

function closeLightbox() {
  isLightboxOpen.value = false;
}

function showNextLightboxImage() {
  if (!visualGallery?.images?.length) return;
  activeImageIndex.value =
    (activeImageIndex.value + 1) % visualGallery.images.length;
}

function showPrevLightboxImage() {
  if (!visualGallery?.images?.length) return;
  activeImageIndex.value =
    (activeImageIndex.value - 1 + visualGallery.images.length) %
    visualGallery.images.length;
}

const isVideoModalOpen = ref(false);

const youtubeEmbedUrl =
  'https://www.youtube.com/embed/ALEUhwyjcZA?autoplay=1&rel=0';

function openVideoModal() {
  isVideoModalOpen.value = true;
}

function closeVideoModal() {
  isVideoModalOpen.value = false;
}
</script>

<template>
  <!-- Hero-section -->

  <section class="page-container md:w-full">
    <!-- First row -->
    <div
      class="flex justify-between py-8 md:mx-25 items-baseline border-b border-(--color-border) h-full max-h-250"
    >
      <h1 class="font-accent text-6xl md:text-5xl">Olga Pasko</h1>

      <p class="label-caps hidden sm:block text-(--color-text-light)">
        Multimediedesign · Danmark
      </p>
    </div>

    <div
      class="grid grid-cols-1 gap-4 pt-8 pb-8 min-[740px]:grid-cols-[minmax(0,1fr)_minmax(300px,420px)] min-[740px]:gap-10 min-[740px]:pt-12 min-[740px]:h-auto xl:h-auto min-[1000px]:grid-cols-2 min-[1000px]:h-auto min-[1000px]:mx-25"
    >
      <!-- Hero-text-left -->

      <div class="min-w-0 flex flex-col justify-between">
        <div>
          <p class="label-caps text-(--color-accent) pb-5">
            Åben for praktikplads · 2026/2027
          </p>
          <h2
            class="font-accent leading-[1.12] text-[48px] min-[740px]:text-[40px] min-[860px]:text-[48px] text-(--color-text) pb-5 md:leading-[1.4] tracking-[-0.5px]"
          >
            Hjemmesider og <br />
            digitale grænseflader <br />
            —
            <span class="text-(--color-accent) italic">strukturerede</span
            >,<br />
            enkle og overskuelige.
          </h2>
          <p class="text-(--color-text-body) text-sm leading-6 pb-5">
            Studerende i multimediedesign med fokus på webdesign, visuel
            hierarki og HTML/CSS. Jeg sætter pris på at forstå opgaven grundigt
            og arbejder systematisk fra de første skitser til den færdige side.
          </p>
          <div class="gap-4 flex pb-7 min-[1200px]:pb-30">
            <a href="#projekter" class="btn-primary">Se projekter</a>
            <a href="/files/cv-olga-pasko.pdf" download class="btn-secondary"
              >Download CV ↓
            </a>
          </div>
        </div>
        <div
          class="hidden max-[730px]:flex max-md:pb-5 min-[1200px]:flex gap-5 flex-wrap text-xs text-(--color-text-light) w-full pt-5 border-t border-(--color-border)"
        >
          <p>Webdesign</p>
          <p>HTML / CSS</p>
          <p>Vue / Tailwind</p>
          <p>UI og UX</p>
          <p>Visuel kommunikation</p>
          <p>SEO</p>
        </div>
      </div>

      <!-- Hero-img-right -->

      <div class="flex justify-end">
        <div class="relative w-full max-w-105">
          <div class="overflow-hidden bg-(--color-bg-muted)">
            <img
              :src="heroPhoto"
              alt="Olga Pasko"
              class="block h-auto w-full object-cover"
            />
          </div>

          <div
            class="hidden min-[1200px]:block absolute bottom-6 -right-5 bg-(--color-bg-primary) px-6 py-3 text-sm text-(--color-text) shadow-sm border border-(--color-border)"
            style="font-family: var(--font-display)"
          >
            Web · UI · Visuel kommunikation
          </div>

          <div
            class="hidden min-[1200px]:block absolute -bottom-4 -left-4 h-22 w-22 border border-(--color-border)"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projekter Section -->

  <section id="projekter" class="page-container py-16 md:py-24">
    <div class="max-w-3xl">
      <p class="label-caps text-(--color-text-light)">Portefølje</p>

      <div
        class="mt-5 flex items-end justify-between gap-6 border-b border-(--color-border) pb-10"
      >
        <div>
          <h2
            class="text-5xl text-(--color-text) md:text-6xl"
            style="font-family: var(--font-display)"
          >
            Projekter
          </h2>

          <p class="mt-4 max-w-xl text-sm leading-6 text-(--color-text-body)">
            Udvalgte arbejder fra min uddannelse i multimediedesign — webdesign,
            UI, Frontend, motion og grafisk kommunikation.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <div
        class="flex items-end justify-between gap-6 border-b border-(--color-border) pb-6"
      >
        <div>
          <p class="label-caps text-(--color-text-light)">Udvalgte cases</p>
          <h3
            class="mt-2 text-3xl text-(--color-text) md:text-4xl"
            style="font-family: var(--font-display)"
          >
            Tre primære projekter fra studiet
          </h3>
        </div>

        <p
          class="hidden text-xs uppercase tracking-[0.24em] text-(--color-text-light) md:block"
        >
          Komplekse
        </p>
      </div>

      <article
        v-for="(project, index) in primaryProjects"
        :key="project.id"
        class="grid grid-cols-12 items-start gap-15 border-b border-(--color-border) py-12 md:py-15"
      >
        <div
          :class="
            index % 2 === 1
              ? 'col-span-12 md:col-span-5 md:order-2'
              : 'col-span-12 md:col-span-5'
          "
        >
          <div class="h-84 overflow-hidden bg-(--color-bg-muted)">
            <img
              :src="project.coverImage"
              :alt="project.title"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div
          :class="
            index % 2 === 1
              ? 'col-span-12 md:col-span-7 md:order-1'
              : 'col-span-12 md:col-span-7'
          "
        >
          <div class="max-w-xl">
            <div class="flex justify-between gap-4 items-baseline pb-4">
              <p
                class="uppercase font-accent font-normal text-3xl text-(--color-text-light)"
              >
                0{{ index + 1 }}
              </p>

              <p
                class="hidden text-[10px] uppercase tracking-[0.18em] text-(--color-text-light) md:block"
              >
                {{ project.label }}
              </p>
            </div>

            <h4 class="mt-4 text-3xl text-(--color-text) font-accent">
              {{ project.title }}
            </h4>

            <p class="mt-4 text-sm leading-6 text-(--color-text-body) pb-4">
              {{ project.description }}
            </p>

            <ul
              v-if="project.tags?.length"
              class="mt-5 flex flex-wrap gap-2 pb-8"
            >
              <li
                v-for="tag in project.tags"
                :key="tag"
                class="border border-(--color-border) px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-(--color-text-muted)"
              >
                {{ tag }}
              </li>
            </ul>

            <div class="mt-6">
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noreferrer"
                class="text-xs uppercase tracking-[0.18em] text-(--color-text) transition-colors duration-200 hover:text-(--color-text-light)"
              >
                Se mere →
              </a>

              <span
                v-else
                class="text-xs uppercase tracking-[0.18em] text-(--color-text-light)"
              >
                Case kommer snart
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>

  <!-- Øvrige projekter -->

  <section class="w-full bg-(--color-bg-muted)">
    <div class="page-container py-20">
      <div class="max-w-155">
        <p class="label-caps text-(--color-text-light)">
          Øvrigt arbejde fra studiet
        </p>

        <div class="mt-2 flex items-baseline gap-4">
          <p class="font-accent text-3xl text-(--color-text-light)">02</p>
          <h3 class="font-accent text-5xl leading-none text-(--color-text)">
            Øvrige projekter
          </h3>
        </div>

        <p class="mt-12 max-w-140 text-sm leading-7 text-(--color-text-body)">
          Projekter der viser spændvidde i kompetencer — grafisk identitet,
          lokalt designarbejde og præsentationsdesign.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article
          v-for="project in otherProjects"
          :key="project.id"
          class="flex h-full flex-col bg-(--color-bg-primary)"
        >
          <div class="h-80 overflow-hidden bg-(--color-bg-primary)">
            <img
              :src="project.coverImage"
              :alt="project.title"
              class="h-full w-full object-cover object-center"
            />
          </div>

          <div class="flex flex-1 flex-col justify-between px-5 py-5">
            <div>
              <p class="label-caps text-(--color-text-light)">
                {{ project.label }}
              </p>

              <h4
                class="mt-2 font-accent text-4xl leading-tight text-(--color-text)"
              >
                {{ project.title }}
              </h4>

              <p
                class="mt-4 max-w-105 text-sm leading-7 text-(--color-text-body)"
              >
                {{ project.description }}
              </p>
            </div>

            <div class="mt-8 border-t border-(--color-border) pt-4">
              <div class="flex items-center justify-between gap-4">
                <p class="text-[11px] text-(--color-text-light)">
                  {{ project.shortDescription }}
                </p>

                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  rel="noreferrer"
                  class="text-[11px] uppercase tracking-[0.14em] text-(--color-accent) transition-colors duration-200 hover:text-(--color-text)"
                >
                  Se case →
                </a>

                <span
                  v-else
                  class="text-[11px] uppercase tracking-[0.14em] text-(--color-accent)"
                >
                  Se case →
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Visual Gallery -->

  <section class="page-container py-20">
    <div class="max-w-[640px]">
      <p class="label-caps text-(--color-text-light)">Grafisk arbejde</p>

      <div class="mt-2 flex items-baseline gap-4">
        <p class="font-accent text-3xl text-(--color-text-light)">03</p>
        <h3 class="font-accent text-5xl leading-none text-(--color-text)">
          Visuelle projekter
        </h3>
      </div>

      <p class="mt-12 max-w-[560px] text-sm leading-7 text-(--color-text-body)">
        Projekter der viser spændvidde i kompetencer — grafisk identitet, lokalt
        designarbejde og præsentationsdesign.
      </p>

      <p class="mt-4 text-[11px] text-(--color-text-light)">
        Solo — grafisk design og konceptudvikling
      </p>
    </div>

    <div class="mt-10 flex items-center justify-between gap-4">
      <div class="hidden md:block"></div>

      <div class="flex gap-3">
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center border border-(--color-border) text-(--color-text) transition-colors duration-200 hover:bg-(--color-text) hover:text-(--color-bg-white)"
          @click="showPrevVisuals"
          aria-label="Forrige projekter"
        >
          ←
        </button>

        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center border border-(--color-border) text-(--color-text) transition-colors duration-200 hover:bg-(--color-text) hover:text-(--color-bg-white)"
          @click="showNextVisuals"
          aria-label="Næste projekter"
        >
          →
        </button>
      </div>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      <button
        v-for="image in visibleVisualImages"
        :key="image.id"
        type="button"
        class="group overflow-hidden bg-(--color-bg-muted) text-left"
        @click="openLightbox(image.originalIndex)"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="h-[560px] w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </button>
    </div>
  </section>

  <!-- Fullscreen Lightbox -->

  <div
    v-if="isLightboxOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6"
  >
    <button
      type="button"
      class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-white/30 text-2xl text-white transition-colors duration-200 hover:bg-white hover:text-black"
      @click="closeLightbox"
      aria-label="Luk"
    >
      ×
    </button>

    <button
      type="button"
      class="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 text-2xl text-white transition-colors duration-200 hover:bg-white hover:text-black"
      @click="showPrevLightboxImage"
      aria-label="Forrige billede"
    >
      ←
    </button>

    <div class="max-h-full w-full max-w-[1100px]">
      <img
        :src="visualGallery.images[activeImageIndex].src"
        :alt="visualGallery.images[activeImageIndex].alt"
        class="max-h-[88vh] w-full object-contain"
      />
    </div>

    <button
      type="button"
      class="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 text-2xl text-white transition-colors duration-200 hover:bg-white hover:text-black"
      @click="showNextLightboxImage"
      aria-label="Næste billede"
    >
      →
    </button>
  </div>

  <!-- Sådan arbejder jeg - block -->

  <section class="page-container py-20 md:py-24">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
      <div class="md:col-span-4">
        <p class="font-accent text-3xl text-(--color-text-light)">04</p>
        <p class="label-caps mt-2 text-(--color-text-light)">TILGANG</p>

        <h3 class="font-accent mt-3 text-5xl leading-none text-(--color-text)">
          Sådan arbejder jeg
        </h3>

        <p
          class="mt-6 max-w-[260px] text-sm leading-7 text-(--color-text-body)"
        >
          Min tilgang er forankret i forståelse for konteksten og brugernes
          behov — ikke i personlig præference eller æstetik alene.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:col-span-8 md:grid-cols-3 md:gap-0">
        <article class="md:pr-6">
          <p class="font-accent text-2xl text-(--color-text-light)">01</p>

          <h4
            class="font-accent mt-3 text-3xl leading-tight text-(--color-text)"
          >
            Forstå konteksten først
          </h4>

          <p class="mt-4 text-sm leading-7 text-(--color-text-body)">
            Jeg starter med at undersøge brugerne og deres behov. Design uden
            forankring i virkeligheden er gætværk.
          </p>
        </article>

        <article class="md:border-l md:border-(--color-border) md:px-6">
          <p class="font-accent text-2xl text-(--color-text-light)">02</p>

          <h4
            class="font-accent mt-3 text-3xl leading-tight text-(--color-text)"
          >
            Enkelhed er ikke det nemmeste
          </h4>

          <p class="mt-4 text-sm leading-7 text-(--color-text-body)">
            Godt design er det, der virker uden forklaring. Hvert element skal
            tjene et formål — ikke dekorere.
          </p>
        </article>

        <article class="md:border-l md:border-(--color-border) md:px-6">
          <p class="font-accent text-2xl text-(--color-text-light)">03</p>

          <h4
            class="font-accent mt-3 text-3xl leading-tight text-(--color-text)"
          >
            Iterér tidligt, ikke sent
          </h4>

          <p class="mt-4 text-sm leading-7 text-(--color-text-body)">
            Tidlig feedback på wireframes er mere værdifuld end sen kritik af et
            færdigt design. Jeg tester og justerer løbende.
          </p>
        </article>
      </div>
    </div>
  </section>

  <section class="w-full bg-(--color-text)">
    <div class="page-container py-16 md:py-20">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
        <!-- Image -->
        <div class="md:col-span-5">
          <div class="overflow-hidden bg-black/20">
            <img
              :src="fotoAbout"
              alt="Tree near a river"
              class="h-[420px] w-full object-cover md:h-[520px]"
            />
          </div>
        </div>

        <!-- Text -->
        <div class="flex items-center md:col-span-7">
          <div class="max-w-[520px]">
            <div class="flex items-baseline gap-12">
              <p class="font-accent text-3xl text-white/30">05</p>
              <p class="label-caps text-white/50">OM MIG</p>
            </div>

            <h3
              class="font-accent mt-4 text-4xl leading-[1.15] text-(--color-bg-white) md:text-5xl"
            >
              Studerende i webdesign <br />
              <span class="italic text-(--color-accent)">og front end</span>
            </h3>

            <p class="mt-6 text-sm leading-7 text-white/65 md:text-base">
              Jeg studerer multimediedesign og arbejder til daglig med
              webdesign, layout og visuel kommunikation. Jeg er optaget af at
              gøre digitale grænseflader enkle og overskuelige for brugeren.
            </p>

            <p class="mt-5 text-sm leading-7 text-white/65 md:text-base">
              Inden studiet arbejdede jeg med digital kommunikation og
              koordinering — det har givet mig forståelse for, hvem man designer
              for, og hvad en opgave egentlig handler om.
            </p>

            <!-- <div
              class="text-white/85 duration-200 hover:text-(--color-accent) mt-8"
            >
              <RouterLink
                to="/om-mig"
                class="inline-flex items-center gap-2 border-b border-white/25 pb-1 text-sm"
              >
                Læs mere om mig
                <span>→</span>
              </RouterLink>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="page-container py-16 md:py-20">
    <p class="label-caps text-(--color-text-light)">CV og profil</p>

    <h3
      class="font-accent mt-3 text-4xl leading-tight text-(--color-text) md:text-5xl"
    >
      Download CV, video-intro eller find mig på LinkedIn.
    </h3>

    <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
      <!-- PDF -->
      <a
        href="/files/cv-olga-pasko.pdf"
        download
        class="flex items-center gap-4 border border-(--color-border) bg-(--color-bg-white) px-5 py-5 transition-colors duration-200 hover:bg-(--color-bg-muted)"
      >
        <div
          class="flex h-10 w-10 items-center justify-center border border-(--color-border) text-(--color-text-light)"
        >
          ↓
        </div>

        <div>
          <p class="text-sm text-(--color-text)">CV som PDF</p>
          <p class="mt-1 text-[11px] text-(--color-text-light)">
            Opdateret 2026
          </p>
        </div>
      </a>

      <!-- Video -->
      <button
        type="button"
        @click="openVideoModal"
        class="flex items-center gap-4 border border-(--color-border) bg-(--color-bg-white) px-5 py-5 text-left transition-colors duration-200 hover:bg-(--color-bg-muted)"
      >
        <div
          class="flex h-10 w-10 items-center justify-center border border-(--color-border) text-(--color-text-light)"
        >
          ▶
        </div>

        <div>
          <p class="text-sm text-(--color-text)">Video CV</p>
          <p class="mt-1 text-[11px] text-(--color-text-light)">
            1 minutters præsentation
          </p>
        </div>
      </button>

      <!-- LinkedIn -->
      <a
        href="https://www.linkedin.com/in/olga-v-pasko/"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-4 border border-(--color-border) bg-(--color-bg-white) px-5 py-5 transition-colors duration-200 hover:bg-(--color-bg-muted)"
      >
        <div
          class="flex h-10 w-10 items-center justify-center border border-(--color-border) text-(--color-text-light)"
        >
          in
        </div>

        <div>
          <p class="text-sm text-(--color-text)">LinkedIn</p>
          <p class="mt-1 text-[11px] text-(--color-text-light)">
            Profil og netværk
          </p>
        </div>
      </a>
    </div>
  </section>

  <div
    v-if="isVideoModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    @click.self="closeVideoModal"
  >
    <div
      class="relative w-[92vw] max-w-[420px] bg-black p-3 sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1100px]"
    >
      <button
        type="button"
        @click="closeVideoModal"
        class="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center border border-white/20 text-2xl text-white transition-colors duration-200 hover:bg-white hover:text-black"
        aria-label="Luk video"
      >
        ×
      </button>

      <div
        class="relative mx-auto aspect-[16/9] max-h-[80vh] w-full overflow-hidden"
      >
        <iframe
          class="absolute inset-0 h-full w-full"
          :src="youtubeEmbedUrl"
          title="Video CV"
          frameborder="0"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share;
          "
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>

  <section class="page-container pb-20 md:pb-24">
    <div class="border border-(--color-border) px-6 py-10 md:px-10 md:py-12">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
        <div class="md:col-span-8">
          <p class="label-caps text-(--color-text-light)">Kontakt</p>

          <h3
            class="font-accent mt-3 text-4xl leading-tight text-(--color-text) md:text-5xl"
          >
            Søger du en <br />
            multimediedesign-praktikant?
          </h3>

          <p
            class="mt-5 max-w-[420px] text-sm leading-7 text-(--color-text-body)"
          >
            Jeg søger praktikplads og er åben for relevante stillinger inden for
            webdesign, front og visuel kommunikation i Danmark.
          </p>
        </div>

        <div class="md:col-span-4 md:flex md:justify-end">
          <RouterLink to="/om-mig" class="btn-primary">
            Kontakt mig
            <span class="ml-2">→</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
