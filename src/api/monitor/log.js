import request from '@/utils/request'

export function getErrDetail(id) {
  return request({
    url: 'mall-debug/logs/error/' + id,
    method: 'get'
  })
}

export function delAllError() {
  return request({
    url: 'mall-debug/logs/del/error',
    method: 'delete'
  })
}

export function delAllInfo() {
  return request({
    url: 'mall-debug/logs/del/info',
    method: 'delete'
  })
}
