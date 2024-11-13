import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall-debug/yxCardInfo',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'mall-debug/yxCardInfo/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'mall-debug/yxCardInfo',
    method: 'put',
    data
  })
}

export default { add, edit, del }
