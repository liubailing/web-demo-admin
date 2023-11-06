import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
})

api.interceptors.response.use(
  (resp) => {
    const { data = null } = resp.data || {}
    return data
  },
  (er) => {
    if (er?.response?.status === 403) {
      if (window?.location?.href) {
        window.location.href = '/api/auth'
      }
    }
    let { error } = er?.response?.data || {}
    if (!error) {
      error = er?.response?.status
    }

    return { error }
  }
)

export default api
