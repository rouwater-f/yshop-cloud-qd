import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall-debug/yxCardCategory',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'mall-debug/yxCardCategory/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'mall-debug/yxCardCategory',
    method: 'put',
    data
  })
}

export default { add, edit, del }
