import request from "@/utils/request";

/* 获取用户频道 */
export const getChannel = () => {
  return request({
    method: "GET",
    url: "/app/v1_0/user/channels"
  });
};
