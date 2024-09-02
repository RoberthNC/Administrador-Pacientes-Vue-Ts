<template>
  <div v-if="showAlert" :class="isError ? 'error-message' : 'ok-message'">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string
  isError: boolean
  showAlert: boolean
}

const { message, isError } = defineProps<Props>()
</script>

<style scoped>
.ok-message {
  @apply bg-green-500 text-white font-bold text-center uppercase rounded-md p-3 w-full md:w-[75%];
}

.error-message {
  @apply bg-red-500 text-white font-bold text-center uppercase rounded-md p-3 w-full md:w-[75%];
}
</style>
