import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/jobs',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'mall/jobs',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'mall/jobs',
    method: 'put',
    data
  })
}

export function updateIsPause(id) {
  return request({
    url: 'mall/jobs/' + id,
    method: 'put'
  })
}

export function execution(id) {
  return request({
    url: 'mall/jobs/exec/' + id,
    method: 'put'
  })
}

export default { del, updateIsPause, execution, add, edit }
