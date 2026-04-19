<script setup>
import { primaryProjects } from '../data/projects.js';
</script>

<template>
  <section class="page-container">
    <div
      class="flex justify-between py-8 mx-25 items-baseline border-b border-(--color-border)"
    >
      <h1 class="font-accent text-6xl md:text-5xl">Olga Pasko</h1>

      <p class="label-caps text-(--color-text-light)">
        Multimediedesign · Danmark
      </p>
    </div>

    <div class="grid grid-cols-2 gap-4 pt-15 pb-8 mx-25">
      <div class="flex flex-col items-start justify-between max-h-fit">
        <div>
          <p class="label-caps text-(--color-accent) pb-5">
            Åben for praktikplads · 2026/2027
          </p>
          <h2
            class="font-accent leading-[1.4] tracking-[-0.5px] text-5xl text-(--color-text) pb-5 md:text-5xl"
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
          <div class="gap-4 flex pb-30">
            <a href="" class="btn-primary">Se projekter</a>
            <a href="" class="btn-secondary">Download CV</a>
          </div>
        </div>
        <div
          class="flex gap-7 flex-wrap text-xs text-(--color-text-light) justify-between w-full pt-5 border-t border-(--color-border)"
        >
          <p>Webdesign</p>
          <p>HTML / CSS</p>
          <p>UI og UX</p>
          <p>Visuel kommunikation</p>
          <p>SEO</p>
        </div>
      </div>
      <div class="flex flex-col items-end">
        <div>
          <img src="" alt="" />
        </div>
        <p>Web · UI · Visuel kommunikation</p>
      </div>
    </div>
  </section>

  <section id="projekter" class="page-container py-16 md:py-24">
    <div class="max-w-3xl">
      <p class="label-caps text-(--color-text-light)">Selected works</p>

      <div
        class="mt-4 flex items-end justify-between gap-6 border-b border-(--color-border) pb-6"
      >
        <div>
          <h2
            class="text-4xl text-(--color-text) md:text-5xl"
            style="font-family: var(--font-display)"
          >
            Projekter
          </h2>

          <p class="mt-4 max-w-xl text-sm leading-6 text-(--color-text-body)">
            Udvalgte arbejder fra studiet med fokus på webdesign, UI, visuel
            struktur og digital kommunikation.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <div
        class="flex items-center justify-between gap-6 border-b border-(--color-border) pb-4"
      >
        <div>
          <p class="label-caps text-(--color-text-light)">Selected case</p>
          <h3
            class="mt-2 text-2xl text-(--color-text) md:text-3xl"
            style="font-family: var(--font-display)"
          >
            Tre primære projekter fra studiet
          </h3>
        </div>

        <p
          class="hidden text-xs uppercase tracking-[0.24em] text-(--color-text-light)] md:block"
        >
          Komplekse
        </p>
      </div>

      <article
        v-for="(project, index) in primaryProjects"
        :key="project.id"
        class="grid grid-cols-12 items-start gap-6 border-b border-(--color-border) py-10 md:py-12"
      >
        <div
          :class="
            index % 2 === 1
              ? 'col-span-12 md:col-span-5 md:order-2'
              : 'col-span-12 md:col-span-5'
          "
        >
          <div class="overflow-hidden bg-(--color-bg-muted)">
            <img
              :src="project.coverImage || project.image"
              :alt="project.title"
              class="h-full w-full object-cover"
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
            <div class="flex items-start justify-between gap-4">
              <p class="label-caps text-(--color-text-light)">
                0{{ index + 1 }}
              </p>

              <p
                class="hidden text-[10px] uppercase tracking-[0.18em] text-(--color-text-light)] md:block"
              >
                {{ project.label }}
              </p>
            </div>

            <h4
              class="mt-4 text-3xl text-(--color-text)"
              style="font-family: var(--font-display)"
            >
              {{ project.title }}
            </h4>

            <p class="mt-4 text-sm leading-6 text-(--color-text-body)">
              {{ project.description }}
            </p>

            <ul v-if="project.tags?.length" class="mt-5 flex flex-wrap gap-2">
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
</template>
