<template>
  <div>
    <GlobalHeader />

    <router-view v-slot="{ Component, route }">
      <!-- TODO: Fix Transition Logic -->
      <!-- <transition :name="route.meta.transition">
        <component :is="Component" />
      </transition> -->

      <component :is="Component" />
    </router-view>

    <GlobalFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'
</script>

<style scoped></style>
