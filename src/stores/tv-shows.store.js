import { defineStore } from 'pinia'
import { getTvShowsList, getShowById, searchShows } from '@/services/tv-shows.service'

export const tvShowsStore = defineStore({
  id: 'tvShowsStore',
  state: () => ({
    showsList: [],
    showItem: {},
    filteredShows: [],
    isLoading: false
  }),
  getters: {
    getShowsList: (state) => state.showsList,
    showSelected: (state) => state.showItem,
    filteredShowsList: (state) => state.filteredShows
  },
  actions: {
    async loadShows() {
      this.isLoading = true
      try {
        const response = await getTvShowsList()
        this.showsList = response.data
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async getShow(id) {
      try {
        const response = await getShowById(id)
        this.showItem = response.data
      } catch (error) {
        console.log(error)
      }
    },
    async searchShow(query) {
      try {
        const response = await searchShows(query)
        this.filteredShows = response.data.map((item) => {
          return item.show
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
})
