import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall-debug/yxStoreBargainUser',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall-debug/yxStoreBargainUser/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall-debug/yxStoreBargainUser',
    method: 'put',
    data
  })
}
