<script setup lang="ts">
import {RouterView} from 'vue-router';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <nav class="border-b bg-white w-full flex items-center justify-between px-7 py-4">
        <div class="font-semibold">builder</div>
        <div>
          <img
            class="h-10 w-10 rounded-full border-2 border-white ring-2 ring-stone-800"
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
            alt="avatar"
          />
        </div>
      </nav>
    </header>

    <div class="flex-1 flex flex-col">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
