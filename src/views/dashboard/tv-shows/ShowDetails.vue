<template>
  <div class="row justify-content-center">
      <h1>{{ selectedShow.name }}</h1>
    <div class="card--details-variant">
      <CardComp>
        <div class="d-flex">
          <AvatarComp :image="selectedShow?.image?.original"/>
          <div>
           <BadgeComp :items="selectedShow.genres"/>
          <ShowDescription :show="selectedShow" :withTitle="false" />
        </div>
        </div>
      </CardComp>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { onMounted, computed } from 'vue'
import { tvShowsStore } from '@/stores/tv-shows.store'
import CardComp from '@/components/shared/CardComp.vue'
import AvatarComp from '@/components/shared/AvatarComp.vue'
import BadgeComp from '@/components/shared/BadgeComp.vue'
import ShowDescription from '@/components/shows/ShowDescription.vue'

const route = useRoute()
const id = computed(() => route.params.id)
const showsStore = tvShowsStore()
const selectedShow = computed(() => showsStore.showSelected)

onMounted(() => {
  showsStore.getShow(id.value)
})
</script>

