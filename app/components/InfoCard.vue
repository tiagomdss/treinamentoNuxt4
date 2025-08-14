<template>
  <div class="card p-6 rounded-xl text-center">
    <div class="text-4xl mb-3"><slot name="icon">📦</slot></div>
    <h3 class="text-xl font-bold mb-1"><slot name="title" /></h3>
    <p class="text-gray-600"><slot /></p>
  </div>
</template>
