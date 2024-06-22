import axios from 'axios';

export async function fetchGallery(q, currentPage) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const url = `${BASE_URL}${END_POINT}`;

  const params = {
    key: '44406929-b6512fae58ed0703418d850ba',
    q: q,
    page: currentPage,
    per_page: 15,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  try {
    const res = await axios.get(url, { params });
    return res.data;
  } catch {
    console.log('Error');
  }
}
