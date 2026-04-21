<script setup>
import { primaryProjects, otherProjects } from '../data/projects.js';
import heroPhoto from '@/assets/image/hero-photo.jpg';
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
            <a href="" class="btn-primary">Se projekter</a>
            <a href="" class="btn-secondary">Download CV</a>
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
          <div class="h-100 overflow-hidden bg-(--color-bg-muted)">
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
            <div class="flex justify-between gap-4 items-baseline pb-8">
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

            <p class="mt-4 text-sm leading-6 text-(--color-text-body) pb-5">
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
</template>
