import request from '@/utils/request'

export function getCates(params) {
  return request({
    url: 'mall-debug/yxStoreCategory',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'mall-debug/yxStoreCategory',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall-debug/yxStoreCategory/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall-debug/yxStoreCategory',
    method: 'put',
    data
  })
}

export default { add, edit, del, getCates }
