import api from './index';

const API_URL = 'https://iplay.sa.gov.tw/api/GymSearchAllList';

const fetchGymById = (id) => {
  return api.fetch(`https://iplay.sa.gov.tw/odata/Gym(${id})?$format=application/json;odata.metadata=none`,
  {})
  .then(gym => (gym))
}

const fetchGymList = (data) => {
  return api.fetch(API_URL, {
    $format:'application/json;odata.metadata',
    ...data
  })
  .then(gym => (gym));
};

const  fetchPos =  () => {
  const geolocation = navigator.geolocation;
  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'));
    }
    
    geolocation.getCurrentPosition((position) => {
      resolve(position);
    }, (error) => {
      //reject (console.log(error));
    });
  });
  return location;
}

export default {
  getGymById: (id) => (
    fetchGymById(id)
  ),
  getGymList: (data) => (
    fetchGymList(data)
  ),
  getPos: () => (
    fetchPos()
  )
};
