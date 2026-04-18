<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen bg-stone-100 text-neutral-900">
    <header class="border-b border-black/10">
      <div
        class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <RouterLink to="/" class="text-lg font-medium tracking-wide">
          Olga Pasko
        </RouterLink>

        <nav class="flex gap-6 text-sm text-black/70">
          <RouterLink to="/" class="hover:text-black">Hjem</RouterLink>
          <RouterLink to="/om-mig" class="hover:text-black">Om mig</RouterLink>
          <RouterLink to="/cv" class="hover:text-black">CV</RouterLink>
          <RouterLink to="/kontakt" class="hover:text-black"
            >Kontakt</RouterLink
          >
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>
