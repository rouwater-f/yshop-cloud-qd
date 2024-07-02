import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall-debug/yxStoreSeckill',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall-debug/yxStoreSeckill/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall-debug/yxStoreSeckill',
    method: 'put',
    data
  })
}

export function getSecKillInfo(id) {
  return request({
    url: 'mall-debug/yxStoreSecKill/info/' + id,
    method: 'get'
  })
}
