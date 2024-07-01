import request from '@/utils/request'
import qs from 'qs'

export function initData(url, params, config) {
  if (config && config.bypassTenantId) {
    return request({
      url: url + '?' + qs.stringify(params, { indices: false }),
      method: 'get',
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: url + '?' + qs.stringify(params, { indices: false }),
      method: 'get'
    })
  }
}

export function download(url, params) {
  return request({
    url: url + '?' + qs.stringify(params, { indices: false }),
    method: 'get',
    responseType: 'blob'
  })
}
