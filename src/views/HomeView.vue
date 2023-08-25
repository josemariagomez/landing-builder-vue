<template>
  <main class="flex-1 grid grid-cols-[6rem_20rem_1fr] overflow-y-scroll">
    <aside class="border-r p-4 max-h-full overflow-y-scroll">
      <draggable
        class="flex flex-col space-y-2"
        :list="components"
        :group="{name: 'components', pull: 'clone', put: false}"
        :sort="false"
        :clone="addComponent"
        ghost-class="ghost"
        item-key="id"
      >
        <template #item="{element}">
          <div
            class="border p-1 rounded-md text-sm flex items-center justify-center bg-stone-50 text-stone-800 flex-col space-y-1 cursor-grab"
          >
            <div><component :is="{...icons[element.icon]}" /></div>
            <div>{{ element.name }}</div>
          </div>
        </template>
      </draggable>
    </aside>
    <div class="border-r overflow-y-scroll relative">
      <div
        class="px-4 py-2 sticky top-0 z-20 bg-white border-b flex items-center justify-between"
        v-if="pageComponents.length > 0"
      >
        <button
          class="inline-flex justify-center rounded-lg text-sm font-semibold py-1 px-3 bg-stone-900 text-white hover:bg-stone-700"
          @click="handleSave"
        >
          Save
        </button>
        <button
          class="inline-flex justify-center rounded-lg text-sm font-semibold py-1 px-3 bg-white text-stone-900 hover:bg-stone-200"
          @click="handleClear"
        >
          Clear
        </button>
      </div>
      <div class="relative group p-1.5" :data-empty="pageComponents.length == 0">
        <draggable
          class="flex flex-col space-y-2 p-1.5 border-2 rounded-lg border-dashed group-data-[empty=true]:h-20 group-data-[empty=false]:border-transparent"
          :list="pageComponents"
          group="components"
          ghost-class="ghost-page"
          item-key="id"
        >
          <template #item="{element}">
            <div class="cursor-grab rounded-md border px-2 py-1.5 bg-white" :key="element.id">
              <BuilderTextForm
                v-if="element.builderComponentId == 'text'"
                :element="element"
                @duplicate="() => duplicateElement(element)"
                @remove="() => removeElement(element.id)"
              />
              <BuilderImageForm
                v-if="element.builderComponentId == 'image'"
                :element="element"
                @duplicate="() => duplicateElement(element)"
                @remove="() => removeElement(element.id)"
              />
            </div>
          </template>
        </draggable>
        <div
          class="group-data-[empty=true]:flex hidden absolute inset-0 rounded-lg items-end justify-center text-sm text-stone-600 pb-3"
        >
          Add a component here :)
        </div>
      </div>
    </div>
    <div class="overflow-scroll">
      <component
        v-for="comp in pageComponents"
        :key="`preview-${comp.id}`"
        :is="{...builderComponents[comp.component]}"
        v-bind="comp.props"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import {Ref, ref} from 'vue';
import draggable from 'vuedraggable';
import PageComponent from '@/modules/consumer/domain/PageComponent';
import BuilderComponent from '@/modules/builder/domain/BuilderComponent';
import {getBuilderComponents} from '@/modules/builder/application/getBuilderComponents';
import BuilderComponentRepository from '@/modules/builder/domain/BuilderComponentRepository';
import createBuilderComponentRepository from '@/modules/builder/infra/builderComponent.repository';
import {generateUuid} from '@/utils/generateUUid';
import BuilderTextForm from '@/modules/builder/ui/BuilderTextForm.vue';
import BuilderImageForm from '@/modules/builder/ui/BuilderImageForm.vue';
import {builderComponents} from '@/modules/consumer/ui';
import icons from '@/components/svg';

const repo: BuilderComponentRepository = createBuilderComponentRepository();
const components: Array<BuilderComponent> = getBuilderComponents(repo);

const pageComponents: Ref<Array<PageComponent>> = ref([]);

const addComponent = ({id, name, component, defaultProps}: BuilderComponent): PageComponent => ({
  id: generateUuid(),
  builderComponentId: id,
  name,
  props: {...defaultProps},
  component,
});

const removeElement = (id: string) => {
  pageComponents.value = pageComponents.value.filter((comp) => comp.id != id);
};

const duplicateElement = (element: PageComponent) => {
  pageComponents.value.push({...element, id: generateUuid(), props: {...element.props}});
};

const handleSave = () => {
  console.log({components: JSON.parse(JSON.stringify(pageComponents.value))});
  alert('Output is in console :)');
};

const handleClear = () => {
  pageComponents.value = [];
};
</script>

<style scoped>
.ghost {
  @apply cursor-grabbing;
  @apply opacity-60;
}
.ghost-page {
  @apply cursor-grabbing;
  @apply opacity-60;
  @apply flex-row;
  @apply justify-start;
  @apply space-x-2;
  @apply bg-stone-100;
  @apply shadow;
}
</style>
