import axios from 'axios'
export const SEARCH = 'SEARCH';
export const SET_CONTACT_LIST = 'SET_CONTACT_LIST'
export const SET_CONTACT_SEARCH = 'SET_CONTACT_SEARCH'

export function search(value) {
  return { type: SEARCH, value };
}

export const contactList = () => {
  return async (dispatch) => {
    const res = await axios.get('https://randomuser.me/api/?page=3&results=10&seed=abc')
    dispatch({ type: SET_CONTACT_LIST, payload: res.data.results })
  }
}
export const searchHighlight = (ev) => {
    return({ type: SET_CONTACT_SEARCH, payload: ev })
}

