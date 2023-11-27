<template>
  <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active" v-for="(item, index) in breadcrumbs" :key="index">
        <router-link v-if="index < breadcrumbs.length - 1" :to="item.to">{{
          item.label
        }}</router-link>
        <span v-else>{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
const props = defineProps(['routes'])
const breadcrumbs = ref()

watchEffect(() => {
  breadcrumbs.value = props.routes.map((route) => ({
    to: route.path,
    label: route.meta && route.meta.breadcrumb ? route.meta.breadcrumb : route.name
  }))
})
</script>
<style lang="scss" scoped>
.router-link-active { 
    text-decoration: none;
}
</style>
