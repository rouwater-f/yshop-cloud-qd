import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall-debug/yxStoreOrder',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall-debug/yxStoreOrder/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall-debug/yxStoreOrder',
    method: 'put',
    data
  })
}
export function updateDelivery(data) {
  return request({
    url: 'mall-debug/yxStoreOrder/updateDelivery',
    method: 'put',
    data
  })
}
export function editT(data) {
  return request({
    url: 'mall-debug/yxStoreOrder/check',
    method: 'put',
    data
  })
}

export function refund(data) {
  return request({
    url: 'mall-debug/yxStoreOrder/refund',
    method: 'post',
    data
  })
}

export function editOrder(data) {
  return request({
    url: 'mall-debug/yxStoreOrder/edit',
    method: 'post',
    data
  })
}

export function remark(data) {
  return request({
    url: 'mall-debug/yxStoreOrder/remark',
    method: 'post',
    data
  })
}

export function get() {
  return request({
    url: 'mall-debug/yxExpress',
    method: 'get'
  })
}

export function express(data) {
  return request({
    url: 'mall-debug/yxStoreOrder/express',
    method: 'post',
    data
  })
}

export function getOrderDetail(id) {
  return request({
    url: 'mall-debug/getStoreOrderDetail/' + id,
    method: 'get'
  })
}

export function getNowOrderStatus(id) {
  return request({
    url: 'mall-debug/getNowOrderStatus/' + id,
    method: 'get'
  })
}
