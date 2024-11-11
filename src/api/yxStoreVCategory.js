import request from '@/utils/request'

export function getCates(params) {
  return request({
    url: 'mall/yxStoreVCategory',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'mall/yxStoreVCategory',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxStoreVCategory/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxStoreVCategory',
    method: 'put',
    data
  })
}

export default { add, edit, del, getCates }
