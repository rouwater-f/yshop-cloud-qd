import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall-debug/yxStoreOrderStatus',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall-debug/yxStoreOrderStatus/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall-debug/yxStoreOrderStatus',
    method: 'put',
    data
  })
}
