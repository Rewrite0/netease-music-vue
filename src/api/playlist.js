import { request } from "./baseUrl";

// 获取网友精选碟歌单
export const getPlaylists = (params) => request.get('/top/playlist', { params })

// 获取精品歌单
export const getTopPlaylists = (params) => request.get('/top/playlist/highquality', { params })