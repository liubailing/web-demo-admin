import { LoginTypeEnum } from '@/enum/user'


export interface AccountData {
  userId: string
  userName: string
  email: string
  avatar: string
  isTrial: boolean
  isOnSubscription: boolean
  bindingAccounts: { loginType: LoginTypeEnum; loginName: string; nickName: string }[]
  passwordSet: boolean
  nickName: string
  registeredDate: string
  levelEffectivePeriod: string
  isLevelExpired: boolean
  subscriptionPackageKey: string
  subscriptionPackageName: string
  locale: string
  phoneNumber: string
  balance: number
}


interface ErrorResp {
  error?: { code?: string; message?: string; Message?: string } & boolean
}

export type Resp<D> = D & ErrorResp
