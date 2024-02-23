<template>
  <div class="flex items-center justify-center h-screen">
    <LoginView />
  </div>

  <!-- TODO: Conditionally load display Registration View when a User clicks on Register from main Login View -->
  <!-- <div class="flex items-center justify-center h-screen">
    <RegistrationView />
  </div> -->
</template>

<script setup lang="ts">
import LoginView from '@/components/LoginView.vue'
import RegistrationView from '@/components/RegistrationView.vue'
</script>

<style scoped></style>
