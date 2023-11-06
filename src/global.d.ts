export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_ENV: 'uat' | 'dev' | 'prd'
    }
  }
  interface Window {
    dataLayer: Record<string, string>[]
    getzhiSDKInstance: any
  }
}
