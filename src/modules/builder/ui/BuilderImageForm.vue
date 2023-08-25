<template>
  <div
    class="uppercase leading-tight text-xs pl-2 font-semibold text-stone-500 pt-1 pb-2 flex items-center justify-between"
  >
    <div>Image</div>
    <div class="flex space-x-2">
      <button class="hover:text-stone-700" @click="handleDuplicate">Duplicate</button>
      <button class="hover:text-stone-700" @click="handleRemove">Remove</button>
    </div>
  </div>
  <div class="flex flex-col space-y-1">
    <RadioGroup v-model="element.props.content" class="grid grid-cols-3 gap-2">
      <RadioGroupOption v-for="image in defaultImages" :key="image" v-slot="{checked}" :value="image">
        <div
          class="aspect-video relative rounded-md ring data-[checked=true]:ring-teal-500 data-[checked=false]:ring-transparent bg-stone-50 flex items-center justify-center"
          :data-checked="checked"
        >
          <div class="text-xs">Loading...</div>
          <img :src="image" class="absolute aspect-video object-cover object-center rounded-md" />
        </div>
      </RadioGroupOption>
    </RadioGroup>
  </div>
</template>

<script setup lang="ts">
import PageComponent from '@/modules/consumer/domain/PageComponent';
import {PropType} from 'vue';
import {RadioGroup, RadioGroupOption} from '@headlessui/vue';

const defaultImages: Array<string> = [
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
  'https://images.unsplash.com/photo-1598649999298-3812df10c9ce',
  'https://images.unsplash.com/photo-1611241893603-3c359704e0ee',
];

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
