import { request } from "./baseUrl";

// 获取专辑内容
export const getAlbum = id => request.get(`/album?id=${id}`)