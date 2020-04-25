<template>
  <div class="login-container">
    <!-- 搜索区域 -->
    <van-nav-bar class="page-nav-bar">
      <van-search slot="left" placeholder="请输入搜索关键词" background="#3296fa" />
    </van-nav-bar>

    <!-- 频道区域 -->
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="item in channels" :key="item.id" :title="item.name">{{ item.name }}</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getChannel } from '@/api/channels'
export default {
  name: '',
  created() {
    this.getChannels()
  },
  data() {
    return {
      active: 0,
      channels: []
    }
  },
  methods: {
    async getChannels() {
      try {
        const { data } = await getChannel()
        this.channels = data.data.channels
      } catch (error) {
        this.$toast.fail('网络问题，请稍候重试')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.van-search {
  margin: 0 auto;
  padding: 0 12px;
  width: 80%;
}
</style>