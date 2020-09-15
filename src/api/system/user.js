import request from '@/utils/request'
import { encrypt } from '@/utils/rsaEncrypt'

export function add(data) {
  return request({
    url: 'system/user',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'system/user',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'system/user',
    method: 'put',
    data
  })
}

export function editUser(data) {
  return request({
    url: 'system/user/center',
    method: 'put',
    data
  })
}

export function updatePass(user) {
  const data = {
    oldPass: encrypt(user.oldPass),
    newPass: encrypt(user.newPass)
  }
  return request({
    url: 'system/user/updatePass/',
    method: 'post',
    data
  })
}

export function updateEmail(form) {
  const data = {
    password: encrypt(form.pass),
    email: form.email
  }
  return request({
    url: 'system/user/updateEmail/' + form.code,
    method: 'post',
    data
  })
}

export default { add, edit, del }

