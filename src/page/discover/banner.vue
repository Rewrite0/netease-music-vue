<template>
<div>
  <el-carousel :interval="4000" class="banner-carousel" type="card">
    <el-carousel-item :key="banner.targetId" v-for="banner in banners">
      <img
        :src="banner.imageUrl"
        class="banner-img"
      />
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
import { getBanner } from '@/api'

export default{
  data(){
    return {
      banners: []
    }
  },
  created(){
    getBanner().then( res => {
      this.banners = res.banners
    })
  }
}
</script>

<style lang="scss" scoped>
.banner-img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
</style>