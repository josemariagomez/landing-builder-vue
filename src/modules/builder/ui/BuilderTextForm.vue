<template>
  <div
    class="uppercase leading-tight text-xs pl-2 font-semibold text-stone-500 pt-1 pb-2 flex items-center justify-between"
  >
    <div>Text</div>
    <div class="flex space-x-2">
      <button class="hover:text-stone-700" @click="handleDuplicate">Duplicate</button>
      <button class="hover:text-stone-700" @click="handleRemove">Remove</button>
    </div>
  </div>
  <div class="flex flex-col space-y-1">
    <input class="border px-2 py-0.5 rounded-md w-full" type="text" v-model="element.props.content" />
    <select class="border px-2 py-0.5 rounded-md w-full" v-model="element.props.variant">
      <option value="h1">Title (h1)</option>
      <option value="h2">Subtitle (h2)</option>
      <option value="p">Paragraph (p)</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type PageComponent from '@/modules/consumer/domain/PageComponent';
import {type PropType} from 'vue';

defineProps({
  element: {
    type: Object as PropType<PageComponent>,
    required: true,
  },
});

const emit = defineEmits(['remove', 'duplicate']);

const handleRemove = () => emit('remove');
const handleDuplicate = () => emit('duplicate');
</script>
