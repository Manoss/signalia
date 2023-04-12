import axios from 'axios'

export const getSlideshows = async (host = '') => {
  return axios.get(host + '/api/v1/slideshow').then(res => {
    if (res && res.data) {
      return res.data
    }
  })
}

export const addSlideshow = async (host = '') => {
  return axios.post(host + '/api/v1/slideshow').then(res => {
    if (res && res.data) {
      return res.data
    }
  })
}

export const getSlideshow = async (id, host = '') => {
  return axios.get(host + '/api/v1/slideshow/' + id).then(res => {
    if (res && res.data) {
      return res.data
    }
  })
}

export const deleteSlideshow = async (id, host = '') => {
  console.debug('DELETE SLIDESHOW - ID ',id)
  return axios.delete(host + '/api/v1/slideshow/' + id).then(res => {
    if (res && res.data) {
      return res.data
    }
  })
}

export const updateSlideshow = async(id, data, host = '') => {
  return axios.patch(host + '/api/v1/slideshow/' + id, data).then(res => {
    if (res && res.data) {
      return res.data
    }
  })
}

export const reorderSlides = async(id, oldIndex, newIndex, host = '') => {
  return axios
    .patch(host + '/api/v1/slideshow/' + id + '/reorder', { oldIndex, newIndex })
    .then(res => {
      if (res && res.data) {
        return res.data
      }
    })
}
