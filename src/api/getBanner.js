import { request } from "./baseUrl";

// 获取banner图
export const getBanner = () => request.get('/banner?type=0')