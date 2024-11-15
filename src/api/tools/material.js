import request from '@/utils/request'

export function getPage(query) {
  return request({
    url: 'mall-debug/material/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: 'mall-debug/material',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: 'mall-debug/material/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: 'mall-debug/material/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: 'mall-debug/material',
    method: 'put',
    data: obj
  })
}
