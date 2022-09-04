import request from './request'

export const getSpu = (params) => {
  return request({
    url: '/caigou',
    params
  })
}

export const addSpu = (data) => {
  return request({
    url: '/add',
    method:'post',
    data
  })
}

export const deleteSpu = () => {
  return request({
    url: '/del',
    method:'delete'
  })
}