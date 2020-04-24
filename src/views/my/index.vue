<template>
  <div class="my-container">
    <!-- 用户登录后显示用户信息部分 -->
    <div v-if="user" class="header user-info">
      <!-- 头像、名称、编辑资料---上半部分 -->
      <div class="base-info">
        <!-- 头像+昵称 -->
        <div class="left">
          <van-image round class="avatar" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <span class="name">大爷来玩呀</span>
        </div>
        <!-- 编辑资料 -->
        <div class="right">
          <van-button round>编辑资料</van-button>
        </div>
      </div>
      <!-- 数量统计部分---下半部分 -->
      <div class="data-stats">
        <div class="data-item">
          <span class="count">100</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">101</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">100001</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">9999999</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>

    <!-- 用户未登录显示部分 -->
    <div v-else class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="~@/assets/mobile.png" alt />
        <span class="text">登录 / 注册</span>
      </div>
    </div>

    <!-- 收藏、历史布局部分 -->
    <van-grid :column-num="2" class="grid-nav mb-10" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont- iconshoucang"></i>
        <span class="text" slot="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont- iconlishi"></i>
        <span class="text" slot="text">历史</span>
      </van-grid-item>
    </van-grid>

    <!-- cell单元格导航部分 -->
    <van-cell title="消息通知" is-link url="/vant/mobile.html" />
    <van-cell title="小智同学" is-link to="index" class="mb-10" />
    <van-cell v-if="user" title="退出登录" class="logout" @click="logout" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: '',
  data() {
    return {}
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    logout() {
      this.$dialog
        .confirm({
          title: '退出确认',
          message: '退出后不会删除本地数据，但不会进行数据同步，确定退出？'
        })
        .then(() => {
          // on confirm
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>
<style lang="less" scoped>
.my-container {
  .header {
    height: 361px;
    background: url('~@/assets/banner.png');
    background-size: cover;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .mobile-img {
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: #fff;
      }
    }
  }
  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          border: 2px solid #fff;
          height: 132px;
          width: 132px;
          margin-right: 23px;
        }
        .name {
          font-size: 34px;
          color: #fff;
        }
      }
    }
    .data-stats {
      display: flex;
      .data-item {
        flex: 1;
        height: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;
        .count {
          font-size: 36px;
        }
        .text {
          font-size: 23px;
        }
      }
    }
  }
  .grid-nav {
    .grid-item {
      height: 141px;
      i.iconfont- {
        font-size: 45px;
      }
      .iconshoucang {
        color: #eb5253;
      }
      .iconlishi {
        color: #ff9d1d;
      }
      span.text {
        font-size: 28px;
      }
    }
  }
  .logout {
    text-align: center;
    color: #d86262;
  }
  .mb-10 {
    margin-bottom: 10px;
  }
}
</style>