import axios from 'axios';
import { handleResponse, handleError } from './response';

const API_URL = "/api" ;

export const getAllDeals = (resource) => {
  return axios(`${API_URL}/${resource}`)
   .then(handleResponse)
   .catch(handleError)
 }
 
 export const getAllStores = (resource) => {
  return axios.get(`${API_URL}/${resource}`)
  .then(handleResponse)
  .catch(handleError)
}

/*
export const getSingleDeal = (resource, id) => {
  return axios.get(`${API_URL}/${resource}/${id}`)
  .then(handleResponse)
  .catch(handleError)
}
*/

export const getSingleDeal = (resource) => {
  return axios.get(`${API_URL}/${resource}`)
  .then(handleResponse)
  .catch(handleError)
}
