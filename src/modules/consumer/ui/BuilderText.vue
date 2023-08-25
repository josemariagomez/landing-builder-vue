<template>
  <div class="p-4 w-full">
    <h1 v-if="variant == 'h1'" class="text-center font-bold text-3xl mb-2">{{ content }}</h1>
    <h2 v-else-if="variant == 'h2'" class="text-center font-bold text-xl mb-1">{{ content }}</h2>
    <p v-else class="text-center text-stone-600">{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'p',
  },
});
</script>
