<template>
  <HeaderView />
  <div class="container mt-5">
    <BreadCrumb v-if="route.matched" :routes="route.matched" />
    <RouterView />
  </div>
</template>
<script setup>
import { RouterView, useRoute } from 'vue-router'
import HeaderView from '@/components/layout/HeaderView.vue'
import BreadCrumb from '@/components/shared/BreadCrumb.vue'
const route = useRoute()
</script>
