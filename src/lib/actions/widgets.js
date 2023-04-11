import axios from 'axios'
const host = process.env.HOST

export const addWidgetApi = (display, type, data = {}, host = '') => {
  return axios.post(host + '/api/v1/widgets', {
    display,
    type,
    data
  })
}

export const getWidgets = async(display, host = '') => {
  return axios.get(host + '/api/v1/display/' + display + '/widgets').then(res => {
    if (res && res.data) {
      return res.data
    }
  })
}

export const deleteWidgetApi = async(id, host = '') => {
  return axios.delete(host + '/api/v1/widgets/' + id)
}

export const updateWidgetApi = async(id, data, host = '') => {
  return axios.put(host + '/api/v1/widgets/' + id, data)
}

export const getWidget = async(id, host = '') => {
  return axios.get(host + '/api/v1/widgets/' + id).then(res => {
    if (res && res.data) {
      return res.data
    }
  })
}
