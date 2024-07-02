import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall-debug/yxStoreCombination',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall-debug/yxStoreCombination/' + id,
    method: 'delete'
  })
}

export function getCombinationInfo(id) {
  return request({
    url: 'mall-debug/yxStoreCombination/info/' + id,
    method: 'get'
  })
}

export function onsale(id, data) {
  return request({
    url: 'mall-debug/yxStoreCombination/onsale/' + id,
    method: 'post',
    data
  })
}
