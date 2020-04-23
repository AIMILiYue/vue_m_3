/* api配置文件 */

import axios from 'axios'

const request = axios.create({
    // 基础api
    baseURL: 'http://ttapi.research.itcast.cn'
})

export default request