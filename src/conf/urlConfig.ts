export const isPrd = process.env.APP_ENV === 'prd'
export const appEnv = process.env.APP_ENV || 'dev'

const URLs: Record<typeof process.env.APP_ENV, string> = {
  dev: 'https://pre.bazhuayu.com',
  uat: 'https://pre.bazhuayu.com',
  prd: 'https://www.bazhuayu.com',
}

export const API_URL = !isPrd ? 'https://pre-webapi.bazhuayu.com' : 'http://api-gateway-svc'


export const WEBSITE_URL = URLs[appEnv]
export const AUTH_CALLBACK = process.env['AUTH_CALLBACK'] || new URL('/login-callback', URLs[appEnv]).toString()
export const LOGOUT_CALLBACK = process.env['LOGOUT_CALLBACK'] || WEBSITE_URL
// export const AUTH_URL = !isPrd ? 'https://pre-identity-bc.bazhuayu.com' : 'https://identity.bazhuayu.com'
export const AUTH_URL = !isPrd ? 'http://192.168.110.229:54034' : 'https://identity.bazhuayu.com'


