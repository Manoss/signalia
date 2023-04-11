import axios from 'axios'

export const getDisplays = async (host = '') => {
 
  const res = await axios.get(host + '/api/v1/display')
  if (res && res.data) {
    return res.data
  }
}

export const addDisplay = async (host = '') => {
  const res = await axios.post(host + '/api/v1/display')
  if (res && res.data) {
    return res.data
  }
}

export const getDisplay = async (id, host = '') => {
  console.debug('Host GetDisplay : ', host)
  return axios.get(host + '/api/v1/display/' + id).then(res => {
    if (res && res.data) {
      return res.data
    }
  })
}

export const deleteDisplay = async (id, host = '') => {
  return axios.delete(host + '/api/v1/display/' + id).then(res => {
    console.debug('API DeleteDisplay ', res)
    if (res && res.data) {
      return res.data
    }
  })
}

export const updateDisplay = async (id, data, host = '') => {
  return axios.patch(host + '/api/v1/display/' + id, data).then(res => {
    if (res && res.data) {
      return res.data
    }
  })
}
