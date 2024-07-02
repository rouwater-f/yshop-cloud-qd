import request from '@/utils/request'

export function count() {
  return request({
    url: 'mall-debug/visits',
    method: 'post'
  })
}

export function get() {
  return request({
    url: 'mall-debug/visits',
    method: 'get'
  })
}

export function getChartData() {
  return request({
    url: 'mall-debug/visits/chartData',
    method: 'get'
  })
}

export function gett() {
  return request({
    url: 'mall-debug/data/count',
    method: 'get'
  })
}

export function chart() {
  return request({
    url: 'mall-debug/data/chart',
    method: 'get'
  })
}

export function getOrderCount() {
  return request({
    url: 'mall-debug/yxStoreOrder/orderCount',
    method: 'get'
  })
}
