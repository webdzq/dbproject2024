import {
  AxiosConfig,
  AxiosResponse,
  AxiosRequestHeaders,
  AxiosError,
  InternalAxiosRequestConfig
} from './types'
import { ElMessage } from 'element-plus'
import qs from 'qs'
import { loginApi } from '@/api/login'
import { useStorage } from '@/hooks/web/useStorage'
import { useAppStoreWithOut } from '@/store/modules/app'

const appStore = useAppStoreWithOut()

const { getStorage } = useStorage()

const config: AxiosConfig = {
  /**
   * api请求基础路径
   */
  baseUrl: {
    // 开发环境接口前缀
    base: '',
    // base: 'http://10.254.47.41:8099/',

    // 打包开发环境接口前缀
    dev: '',

    // 打包生产环境接口前缀
    pro: '',

    // 打包测试环境接口前缀
    test: ''
  },

  /**
   * 接口成功返回状态码
   */
  code: 0,

  /**
   * 接口请求超时时间
   */
  timeout: 10000,

  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  defaultHeaders: 'application/json',

  interceptors: {
    //请求拦截
    // requestInterceptors: (config) => {
    //   return config
    // },
    // 响应拦截器
    // responseInterceptors: (result: AxiosResponse) => {
    //   return result
    // }
  }
}

const defaultRequestInterceptors = (config: InternalAxiosRequestConfig) => {
  if (
    config.method === 'post' &&
    (config.headers as AxiosRequestHeaders)['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    config.data = qs.stringify(config.data)
  }
  if (config.method === 'get' && config.params) {
    let url = config.url as string
    url += '?'
    const keys = Object.keys(config.params)
    for (const key of keys) {
      if (config.params[key] !== void 0 && config.params[key] !== null) {
        url += `${key}=${encodeURIComponent(config.params[key])}&`
      }
    }
    url = url.substring(0, url.length - 1)
    config.params = {}
    config.url = url
  }
  return config
}
;(error: AxiosError) => {
  console.log(error)
  Promise.reject(error)
}

const defaultResponseInterceptors = async (response: AxiosResponse<any>) => {
  if (response?.config?.responseType === 'blob') {
    // 如果是文件流，直接过
    return response
  } else if (response.errNo === config.code) {
    return response.data
  } else if (response.errNo === 1003) {
    ElMessage.error('登录过期请重新登录')
    // const res = await loginApi()
    // console.log(res)
    // if (res.data && res.data.loginUrl) {
    //   window.location.href = res.data.loginUrl
    // }
    // const user = getStorage(appStore.getUserInfo)
    console.log('response.data', response)
    window.location.href = response.data.loginUrl
  } else {
    // console.log('ddddddddd', response.errStr)
    ElMessage.error(response.message)
  }
}
;(error: AxiosError) => {
  console.log('err' + error) // for debug
  ElMessage.error(error.message)
  return Promise.reject(error)
}

export { defaultResponseInterceptors, defaultRequestInterceptors }
export default config
