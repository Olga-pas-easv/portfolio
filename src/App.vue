<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen w-full">
    <header class="page-container">
      <div
        class="flex justify-between items-center h-full py-4 text-(--color-text)"
      >
        <div class="flex gap-5 items-baseline">
          <RouterLink to="/" class="font-accent text-xl">
            Olga Pasko
          </RouterLink>
          <p class="label-caps text-(--color-text-muted) font-normal">
            Multimediedesign
          </p>
        </div>

        <nav class="flex gap-8 text-xs tracking-widest">
          <RouterLink to="/" class="nav-link">Hjem</RouterLink>
          <a href="#projekter" class="nav-link">Projekter</a>
          <RouterLink to="/om-mig" class="nav-link">Om mig</RouterLink>
          <RouterLink to="/cv" class="nav-link">CV</RouterLink>
        </nav>

        <div class="btn-header">
          <RouterLink to="/kontakt" class="text-xs">Kontakt mig</RouterLink>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="bg-(--color-text) w-full">
      <div
        class="page-container py-6 font-accent text-center text-sm text-(--color-bg-white)"
      >
        &copy; 2026 Olga Pasko. Alle rettigheder forbeholdes.
      </div>
    </footer>
  </div>
</template>
