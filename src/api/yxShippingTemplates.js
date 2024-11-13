import request from '@/utils/request'

export function add(data, id) {
  return request({
    url: `mall/yxShippingTemplates/save/${id}`,
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'mall-debug/yxShippingTemplates/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'mall-debug/yxShippingTemplates',
    method: 'put',
    data
  })
}

export function getCity() {
  return request({
    url: 'mall-debug/yxShippingTemplates/citys',
    method: 'get'
  })
}

export default { add, edit, del, getCity }
