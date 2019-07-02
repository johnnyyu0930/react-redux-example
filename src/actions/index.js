import iplay from '../api/iplay';

export const GET_GYM_LIST = 'GET_GYM_LIST';
export const IS_FETCHING = 'IS_FETCHING';
export const GET_POS_LAT = 'GET_POS_LAT';
export const GET_POS_LNG = 'GET_POS_LNG';
export const SELECT_GYM_ID = 'SELECT_GYM_ID';
export const GET_GYM_INFO = 'GET_GYM_INFO';
export const GYM_INFO_IS_FETCHING = 'GYM_INFO_IS_FETCHING';

export const getGymList = (data) => (dispatch) => {
  let x = false;
  dispatch({ type:IS_FETCHING, x })
  iplay.getGymList(data)
  .then(gyms => {
    dispatch({ type:GET_GYM_LIST, gyms })
    return gyms
  })
  .then((gyms)=> {
    let x = true;
    dispatch({ type:IS_FETCHING, x })
    return gyms
  })
  .catch(error => console.error(error))
}

export const getPos = () => (dispatch) => {
 iplay.getPos().then((pos)=>{
   let lat = pos.coords.latitude;
   let lng = pos.coords.longitude;
   dispatch({ type:GET_POS_LAT, lat});
   dispatch({ type:GET_POS_LNG, lng});
   return pos;
 })
}

export const getSelectGymID = (id) => (dispatch) =>
  (
    dispatch({type:SELECT_GYM_ID, id})
  )

export const getGymById = (id) => (dispatch) => {
  let x = false;
  dispatch({ type:GYM_INFO_IS_FETCHING, x })
  iplay.getGymById(id).then((gym)=>{
    dispatch({type:GET_GYM_INFO, gym});
    return gym;
  })
  .then((gym)=> {
    let x = true;
    dispatch({ type:GYM_INFO_IS_FETCHING, x });
    return gym;
  })
  .catch(error => console.error(error))
}