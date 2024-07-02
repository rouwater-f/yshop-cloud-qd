import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall-debug/yxStoreProduct/addOrSave',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall-debug/yxStoreProduct/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall-debug/yxStoreProduct',
    method: 'put',
    data
  })
}

export function copy(data, config) {
  if (config && config.bypassTenantId) {
    return request({
      url: 'mall-debug/yxStoreProduct/copy',
      method: 'post',
      data,
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: 'mall-debug/yxStoreProduct/copy',
      method: 'post',
      data
    })
  }
}

export function onsale(id, data) {
  return request({
    url: 'mall-debug/yxStoreProduct/onsale/' + id,
    method: 'post',
    data
  })
}

export function recovery(id) {
  return request({
    url: 'mall-debug/yxStoreProduct/recovery/' + id,
    method: 'delete'
  })
}

export function isFormatAttr(id, data) {
  return request({
    url: 'mall-debug/yxStoreProduct/isFormatAttr/' + id,
    method: 'post',
    data
  })
}

export function isFormatAttrForActivity(id, data) {
  return request({
    url: 'mall-debug/yxStoreProduct/isFormatAttrForActivity/' + id,
    method: 'post',
    data
  })
}
export function setAttr(id, data) {
  return request({
    url: 'mall-debug/yxStoreProduct/setAttr/' + id,
    method: 'post',
    data
  })
}

export function clearAttr(id) {
  return request({
    url: 'mall-debug/yxStoreProduct/clearAttr/' + id,
    method: 'post'
  })
}

export function getAttr(id) {
  return request({
    url: 'mall-debug/yxStoreProduct/attr/' + id,
    method: 'get'
  })
}

export function getInfo(id, config) {
  if (config && config.bypassTenantId) {
    return request({
      url: 'mall-debug/yxStoreProduct/info/' + id,
      method: 'get',
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: 'mall-debug/yxStoreProduct/info/' + id,
      method: 'get'
    })
  }
}
