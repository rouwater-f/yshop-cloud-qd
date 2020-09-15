import request from '@/utils/request'

export function getDicts() {
  return request({
    url: 'system/dict/all',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: 'system/dict',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'system/dict/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'system/dict',
    method: 'put',
    data
  })
}

export default { add, edit, del }
