//use for fetching API data
import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
      'x-rapidapi-key': 'bb17120accmsh199b5ea4c019f1bp15ef94jsn820188190d68'
      
    }
};

export const fetchFromAPI = async(url) => {
    const {data} =
    await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}

