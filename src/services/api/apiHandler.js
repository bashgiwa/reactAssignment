import axios from 'axios';
import { handleResponse, handleError } from './response';

const BASE_URL = 'https://www.cheapshark.com/api/1.0';
const options = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}

export const getAllStores = (resource) => {
  return axios.get(`${BASE_URL}/${resource}`)
  .then(handleResponse)
  .catch(handleError)
}

export const getAllDeals = (resource) => {
 return  axios.get(`${BASE_URL}/${resource}`)
  .then(handleResponse)
  .catch(handleError)
}

export const getSingleDeal = (resource, id) => {
  return axios.get(`${BASE_URL}/${resource}/${id}`)
  .then(handleResponse)
  .catch(handleError)
}
