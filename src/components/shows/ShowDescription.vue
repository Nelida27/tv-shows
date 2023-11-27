<template>
  <div class="card__description">
    <h5 v-if="withTitle" class="card__description--title" id="title">
      <RouterLink :to="`/show/${show.id}`">{{ show.name }}</RouterLink>
    </h5>
    <p v-if="show?.rating?.average" class="card__description--rate">
      <StarIcon /><span>{{ show?.rating?.average }}</span>
    </p>
    <p v-if="withSummery" class="card__description--summery">
      <small v-html="show.summary" class="text-muted"></small>
    </p>
  </div>
</template>
<script setup>
import StarIcon from '../icons/StarIcon.vue'
import { RouterLink } from 'vue-router'
defineProps({
  show: Object,
  withSummery: { type: Boolean, default: true },
  withTitle: { type: Boolean, default:true },
})
</script>

