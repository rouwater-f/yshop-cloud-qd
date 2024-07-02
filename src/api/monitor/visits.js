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

