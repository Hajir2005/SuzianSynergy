<script setup lang="ts"></script>

<template>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in" appear>
        <Component :is="Component"></Component>
      </transition>
    </router-view>
  </main>
</template>

<style>
  .route-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }
  .route-enter-active{
    transition: all 0.3s ease-out;
  }

  .route-leave-to {
    opacity: 0;
    transform:translateX(-100px);
  }

  .route-leave-active {
    transition: all 0.3 ease-in;
  }
</style>
