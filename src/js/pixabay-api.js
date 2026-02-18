import axios from 'axios';

const API_KEY = '54693688-3a10af049777c36308454ddb3';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
