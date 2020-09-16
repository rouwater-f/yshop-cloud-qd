import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxArticle',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxArticle/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxArticle',
    method: 'put',
    data
  })
}

export function publish(id) {
  return request({
    url: 'mall/yxArticle/publish/' + id,
    method: 'get'
  })
}

export function get(id) {
  return request({
    url: 'mall/yxArticle/info/' + id,
    method: 'get'
  })
}
