import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall-debug/yxStoreCouponIssueUser',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall-debug/yxStoreCouponIssueUser/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall-debug/yxStoreCouponIssueUser',
    method: 'put',
    data
  })
}
