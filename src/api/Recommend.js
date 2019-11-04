import axios from 'axios'
import { HOST } from './Host.js'

export function getBanner () {
  const url = HOST + '/banner'
  return axios.get(url)
}

export function getRecommendList () {
  const url = HOST + '/personalized'
  return axios.get(url)
}