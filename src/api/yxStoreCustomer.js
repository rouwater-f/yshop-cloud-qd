import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall-debug/yxStoreCustomer',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'mall-debug/yxStoreCustomer/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'mall-debug/yxStoreCustomer',
    method: 'put',
    data
  })
}

export function getqrcode() {
  return request({
    url: 'weixin/wxmp/qrcode',
    method: 'get'
  })
}
export function getOpenId(key) {
  return request({
    url: 'weixin/wxmp/getOpenId?key=' + key,
    method: 'get'
  })
}
export function getwechatCode() {
  return request({
    url: 'weixin/wxmp/wechatCode',
    method: 'get'
  })
}

export default { add, edit, del, getqrcode, getOpenId, getwechatCode }
