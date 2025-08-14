<template>
  <section class="text-center space-y-6">
    <h1 class="text-4xl md:text-6xl font-extrabold">
      Bem-vindo(a) ao <span class="text-green-600">Nuxt</span>
    </h1>
    <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
      Projeto base com Nuxt 4 e Tailwind, inspirado no treinamento atual.
    </p>
    <div class="flex flex-wrap items-center justify-center gap-3">
      <NuxtLink to="/guia" class="btn-primary">Guia Rápido</NuxtLink>
      <a href="https://nuxt.com/docs" target="_blank" class="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50">Documentação</a>
    </div>
  </section>
</template>
