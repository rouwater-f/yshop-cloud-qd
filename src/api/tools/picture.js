import request from '@/utils/request'

export function del(ids) {
  return request({
    url: 'mall-debug/pictures',
    method: 'delete',
    data: ids
  })
}

export function sync() {
  return request({
    url: 'mall-debug/pictures/synchronize',
    method: 'post'
  })
}

export default { del, sync }
