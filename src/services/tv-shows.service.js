import axiosInstance from './axios';

export  async function getTvShowsList() {

    const response = await axiosInstance.get('shows');
    return response;
    
}
export  async function getShowById(id) {

    const response = await axiosInstance.get(`shows/${id}`);
    return response;
    
}
export  async function searchShows(search) {
    const query = new URLSearchParams({
        q: search
      }).toString()

    const response = await axiosInstance.get(`search/shows?${query}`);
    return response;
    
}