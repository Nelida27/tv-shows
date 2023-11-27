<template>
  <nav class="navbar sticky-top">
    <span class="navbar__brand" id="tv-shows">TV Shows</span>
    <div class="navbar__search-form">
      <input
        v-model="searchQuery"
        class="form-control"
        type="search"
        id="searchShows"
        placeholder="Search shows"
        aria-label="Search"
        aria-describedby="basic-addon2"
        @input="debouncedSearch"
      />
    </div>
  </nav>
</template>
<script setup>
import { ref,watchEffect } from 'vue'
import { useRouter,useRoute } from 'vue-router'
import { tvShowsStore } from '@/stores/tv-shows.store'
import debounce from '@/helpers/utils.js'
const showsStore = tvShowsStore()
const searchQuery = ref('')
const router = useRouter()
const route = useRoute();
const currentRoute = ref(route);

const debouncedSearch = debounce(async () => {
  router.push('/search')
  return await showsStore.searchShow(searchQuery.value)
}, 500)

watchEffect(() => {
  if(currentRoute.value.path !== '/search'){
    searchQuery.value ='';
  }

});
</script>
