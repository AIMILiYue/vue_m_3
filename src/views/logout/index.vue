<template>
  <div class="login-container">
    <router-view />
    <van-tabbar route class="tabbars">
      <van-tabbar-item icon="home-o" to="/home">
        <i slot="icon" class="iconfont- iconshouye"></i>
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/qa">
        <i slot="icon" class="iconfont- iconwenda"></i>
        问答
      </van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/video">
        <i slot="icon" class="iconfont- iconshipin"></i>
        视频
      </van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/my">
        <i slot="icon" class="iconfont- iconwode"></i>
        {{ $store.state.user ? '我的' : '未登录' }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.login-container {
  .tabbars {
    i.iconfont- {
      font-size: 36px;
    }
  }
}
</style>