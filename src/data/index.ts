import api from '@/utils/api'
import useSWR from 'swr'
import { AccountData, Resp } from './structure'


export function useAccount(refreshInterval?: number) {
  const key = '/v1/accounts'
  return useSWR<AccountData>(key, () => api.get(key), {
    shouldRetryOnError: false,
    refreshInterval: refreshInterval,
    onSuccess(data) {
      const { userId, email, userName } = data
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ user_id: userId })
      // if (window.getzhiSDKInstance) {
      //   const zhiManager = window.getzhiSDKInstance()
      //   zhiManager?.set('userinfo', data)
      // }
      // getIntercomuser().then((resp) => {
      //   const { intercomUserId, locale } = resp
      //   if (intercomUserId && window.ZHICHI) {
      //     const settings = { user_id: userId, user_hash: intercomUserId, email, name: userName }
      //     window.Intercom('update', locale ? { ...settings, language_override: locale } : settings)
      //   }
      // })
    },
    onError() {
    },
  })
}

/** 用户咨询 */
export function userConsult(params: { [key: string]: string }) {
  const key = `/v1/accounts/userconsult`
  return api.post<void, Resp<unknown>>(key, { ...params })
}

