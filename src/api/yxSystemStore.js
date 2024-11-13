import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall-debug/yxSystemStore',
    method: 'post',
    data
  })
}

export function get() {
  return request({
    url: 'mall-debug/yxSystemStore',
    method: 'get'
  })
}

export function getAll() {
  return request({
    url: 'mall-debug/yxSystemStore/all',
    method: 'get'
  })
}

export function getL(data) {
  return request({
    url: 'mall-debug/yxSystemStore/getL',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'mall-debug/yxSystemStore/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'mall-debug/yxSystemStore',
    method: 'put',
    data
  })
}

export default { getL, add, edit, del, get, getAll }
