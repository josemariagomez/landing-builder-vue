<template>
  <div class="p-4 w-full">
    <img :src="content" class="max-w-[60%] mx-auto rounded-lg aspect-video object-cover object-center" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>
