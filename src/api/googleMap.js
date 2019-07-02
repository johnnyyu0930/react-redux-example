import api from './index.js';

const API_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
const API_KEY = 'AAAAAAAAAAAAAA';

const parseResults = (type) => (results) => (
  results.results.map((item) => ({
    address: item.formatted_address,
    coordinate: item.geometry.location,
    id: item.id,
    name: item.name,
    openingHours: item.opening_hours,
    rating: item.rating,
    type
  }))
);

const fetchLocationsByKeyword = (position, keyword, type) => {
  let location = position ?
    `${position.coords.latitude},${position.coords.longitude}` :
    '';

  return api.fetch(API_URL, {
    location,
    rankby: position? 'distance' : '',
    key: API_KEY,
    query: keyword,
    language: 'zh-TW',
  })
  .then(results => {
    console.log('api', results);
    return results;
  })
  .then(parseResults(type));
}

export default {
  getHospitals: (position) => (
    fetchLocationsByKeyword(position, '場館', 'hospital')
  )
};
