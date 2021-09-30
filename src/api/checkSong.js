import { request } from "./baseUrl";

// 获取歌曲是否可用
export const check = id => request.get(`/check/music?id=${id}`)