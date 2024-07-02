import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall-debug/yxSystemConfig',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall-debug/yxSystemConfig/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall-debug/yxSystemConfig',
    method: 'put',
    data
  })
}

export function get() {
  return request({
    url: 'mall-debug/yxSystemConfig?size=500',
    method: 'get'
  })
}

