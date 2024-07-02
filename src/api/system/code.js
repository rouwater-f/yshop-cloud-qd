import request from '@/utils/request'

export function resetEmail(data) {
  return request({
    url: 'mall-debug/code/resetEmail',
    method: 'post',
    data
  })
}

export function updatePass(pass) {
  return request({
    url: 'mall-debug/users/updatePass/' + pass,
    method: 'get'
  })
}
