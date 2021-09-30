import { request } from "./baseUrl";

// 获得歌手部分信息和热门歌曲
export const getArtist = id => request.get(`/artists?id=${id}`)