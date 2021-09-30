import { request } from "./baseUrl";

// 获取歌单详情
export const getPlayListDetail = params => request.get('/playlist/detail', { params })