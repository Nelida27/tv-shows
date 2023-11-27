<template>
  <div class="shows-list-container">
    <div class="shows-list-container__filter-by">
      <FilterBySelect v-model:title="genreSelected" :options="genresList"  labelTitle="Filter By Genre :" />
    </div>
    <div
      class="shows-list-container__grid btn-group me-2 mb-2 btn-group-sm"
      role="group"
      aria-label="First group"
    >
      <button
        type="button"
        :class="[{ active: isList }, 'btn btn-outline-secondary']"
        @click="isList = true"
      >
        <ListIcon />
      </button>
      <button
        type="button"
        :class="[{ active: !isList }, 'btn btn-outline-secondary']"
        @click="isList = false"
      >
        <GridIcon />
      </button>
    </div>
  </div>
  <div v-if="showsStore.isLoading" class="shows-list-container__loading">
    <LoadingSppiner />
  </div>
  <div v-else :class="isList ? 'list-view' : 'grid-view'">
    <div v-for="(item, index) in filteredItems" :key="index">
      <CardComp>
        <div :class="isList ? 'd-flex' : ''">
          <AvatarComp :image="item?.image?.original" @click="router.push(`/show/${item.id}`)"/>
          <ShowDescription :show="item" :withSummery="isList ? true : false" />
        </div>
      </CardComp>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import CardComp from '@/components/shared/CardComp.vue'
import ListIcon from '@/components/icons/ListIcon.vue'
import GridIcon from '@/components/icons/GridIcon.vue'
import FilterBySelect from '@/components/shared/FilterBySelect.vue'
import ShowDescription from '@/components/shows/ShowDescription.vue'
import { tvShowsStore } from '@/stores/tv-shows.store'
import AvatarComp from '@/components/shared/AvatarComp.vue'
import LoadingSppiner from '@/components/shared/LoadingSppiner.vue'
import { genresList } from '@/helpers/genres.js'
import { useRouter } from 'vue-router'

const isList = ref(true)

const showsStore = tvShowsStore()

const genreSelected = ref('')
const showsList = computed(() => showsStore.getShowsList)
const router = useRouter()
const filteredItems = computed(() => {
  const filterBy = showsList.value.filter((item) => {
    return item.genres.includes(genreSelected.value)
  })
  return filterBy.length > 0 ? filterBy : showsList.value
})

onMounted(() => {
  showsStore.loadShows()
})
</script>
<style lang="scss" scoped>
.shows-list-container {
  display: flex;
  justify-content: space-between;
  &__filter-by {
    padding-bottom: 0.5rem;
    width: 18rem;
  }
  &__loading {
    display: flex;
    justify-content: center;
  }
}
</style>
