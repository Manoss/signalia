import axios from 'axios'

export const getSlides = async(slideshow, host = '') => {
  console.log('getSlides : ', slideshow)
  const res = await axios.get(host + '/api/v1/slideshow/' + slideshow + '/slides')
  console.log('RES : ', res)
  if (res && res.data) {
    return res.data
  }
  return res

  /**
  return axios.get(host + '/api/v1/slideshow/' + slideshow + '/slides').then(res => {
    if (res && res.data) {
      return res.data
    }
  })*/
}

export const getSlide = async(slide, host = '') => {
  return axios.get(host + '/api/v1/slide/' + slide).then(res => {
    if (res && res.data) {
      return res.data
    }
  })
}

export const deleteSlide = async(id, host = '') => {
  return axios.delete(host + '/api/v1/slide/' + id)
}

export const updateSlide = async(id, file, data, host = '') => {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }
  if (file) formData.append('data', file)
  return axios.patch(host + '/api/v1/slide/' + id, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const addSlide = async(slideshow, file, data, host = '') => {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }
  if (file) formData.append('data', file)
  formData.append('slideshow', slideshow)
  return axios.post(host + '/api/v1/slide/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const standaloneUpload = async (file, host = '') => {
  const formData = new FormData()
  formData.append('data', file)
  console.debug('standalone_upload axios formdata : ', formData, file )
  return await axios.post(host + '/api/v1/slide/standalone_upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
