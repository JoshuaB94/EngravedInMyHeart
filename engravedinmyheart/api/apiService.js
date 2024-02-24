import axios from 'axios'
import authToken from './authToken'

// This apiService will be used to house the API calls for the backend and make it easy to import within components or pages.
const apiService = {
  getVerseBank: async () => {
    try {
      const response = await axios.get('https://api.baserow.io/api/database/rows/table/259126/', {
        headers: {
          Authorization: `Token ${authToken}`
        }
      })
      console.log('Got verse bank: ', response.data)
      return response.data
    } catch (error) {
      console.error('Error getting verse bank: ', error)
      throw error
    }
  }
}

export default apiService
