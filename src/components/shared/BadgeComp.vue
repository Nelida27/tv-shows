<template>
  <span v-for="(item, index) in items" :key="index" class="badge m-1 mt-2">
    {{ item }}
  </span>
</template>
<script setup>
defineProps(['items'])
</script>
