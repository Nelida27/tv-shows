<template>
  <div class="d-flex justify-content-between mt-5 mb-2">
    <div v-if="showsList.length > 0" class="list-view">
      <CardComp v-for="(item, index) in showsList" :key="index">
        <div class="d-flex">
          <AvatarComp :image="item?.image?.original" />
          <ShowDescription :show="item" />
        </div>
      </CardComp>
    </div>
    <div class="d-flex" v-else>
      <p>No result found</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import CardComp from '@/components/shared/CardComp.vue'
import ShowDescription from '@/components/shows/ShowDescription.vue'
import AvatarComp from '@/components/shared/AvatarComp.vue'
import { tvShowsStore } from '@/stores/tv-shows.store'

const showsStore = tvShowsStore()

const showsList = computed(() => showsStore.filteredShowsList)
</script>
