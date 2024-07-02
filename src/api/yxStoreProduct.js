import request from '@/utils/request'

export function add(data, config) {
  if (config && config.bypassTenantId) {
    return request({
      url: 'mall/yxStoreProduct/addOrSave',
      method: 'post',
      data,
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: 'mall/yxStoreProduct/addOrSave',
      method: 'post',
      data
    })
  }
}

export function del(id, config) {
  if (config && config.bypassTenantId) {
    return request({
      url: 'mall/yxStoreProduct/' + id,
      method: 'delete',
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: 'mall/yxStoreProduct/' + id,
      method: 'delete'
    })
  }
}

export function edit(data, config) {
  if (config && config.bypassTenantId) {
    return request({
      url: 'mall/yxStoreProduct',
      method: 'put',
      data,
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: 'mall/yxStoreProduct',
      method: 'put',
      data
    })
  }
}

export function copy(data, config) {
  if (config && config.bypassTenantId) {
    return request({
      url: 'mall/yxStoreProduct/copy',
      method: 'post',
      data,
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: 'mall/yxStoreProduct/copy',
      method: 'post',
      data
    })
  }
}

export function onsale(id, data, config) {
  if (config && config.bypassTenantId) {
    return request({
      url: 'mall/yxStoreProduct/onsale/' + id,
      method: 'post',
      data,
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: 'mall/yxStoreProduct/onsale/' + id,
      method: 'post',
      data
    })
  }
}

export function recovery(id, config) {
  if (config && config.bypassTenantId) {
    return request({
      url: 'mall/yxStoreProduct/recovery/' + id,
      method: 'delete',
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: 'mall/yxStoreProduct/recovery/' + id,
      method: 'delete'
    })
  }
}

export function isFormatAttr(id, data, config) {
  if (config && config.bypassTenantId) {
    console.log('is reconfig')
    return request({
      url: 'mall/yxStoreProduct/isFormatAttr/' + id,
      method: 'post',
      data,
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: 'mall/yxStoreProduct/isFormatAttr/' + id,
      method: 'post',
      data
    })
  }
}

export function isFormatAttrForActivity(id, data, config) {
  if (config && config.bypassTenantId) {
    return request({
      url: 'mall/yxStoreProduct/isFormatAttrForActivity/' + id,
      method: 'post',
      data,
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: 'mall/yxStoreProduct/isFormatAttrForActivity/' + id,
      method: 'post',
      data
    })
  }
}
export function setAttr(id, data, config) {
  if (config && config.bypassTenantId) {
    return request({
      url: 'mall/yxStoreProduct/setAttr/' + id,
      method: 'post',
      data,
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: 'mall/yxStoreProduct/setAttr/' + id,
      method: 'post',
      data
    })
  }
}

export function clearAttr(id, config) {
  if (config && config.bypassTenantId) {
    return request({
      url: 'mall/yxStoreProduct/clearAttr/' + id,
      method: 'post',
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: 'mall/yxStoreProduct/clearAttr/' + id,
      method: 'post'
    })
  }
}

export function getAttr(id, config) {
  if (config && config.bypassTenantId) {
    return request({
      url: 'mall/yxStoreProduct/attr/' + id,
      method: 'get',
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: 'mall/yxStoreProduct/attr/' + id,
      method: 'get'
    })
  }
}

export function getInfo(id, config) {
  if (config && config.bypassTenantId) {
    return request({
      url: 'mall/yxStoreProduct/info/' + id,
      method: 'get',
      bypassTenantId: true,
      headers: {
        tenantId: config.tenantId
      }
    })
  } else {
    return request({
      url: 'mall/yxStoreProduct/info/' + id,
      method: 'get'
    })
  }
}
