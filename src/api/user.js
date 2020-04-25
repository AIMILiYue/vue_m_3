import request from "@/utils/request";
// import store from "@/store";
/* 
登录请求接口
@params  
data: mobile 手机号
      code  验证码
*/
export const login = data => {
  return request({
    method: "POST",
    url: "/app/v1_0/authorizations",
    data
  });
};

/* 
发送验证码接口
@params  
data: mobile 手机号
接口请求--每分钟一次
*/

export const send = mobile => {
  return request({
    method: "GET",
    url: `/app/v1_0/sms/codes/${mobile}`
  });
};

/* 获取用户信息 */
export const getUserInfo = () => {
  return request({
    method: "GET",
    url: "/app/v1_0/user"
  });
};
