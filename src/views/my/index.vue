<template>
  <div class="my-container">
    <div class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="~@/assets/mobile.png" alt />
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <div class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image round class="avatar" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <span class="name">大爷来玩呀</span>
        </div>
        <div class="right">
          <van-button round>编辑资料</van-button>
        </div>
      </div>
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
    <van-grid :column-num="2" class="grid-nav" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont- iconshoucang"></i>
        <span class="text" slot="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont- iconlishi"></i>
        <span class="text" slot="text">历史</span>
      </van-grid-item>
    </van-grid>
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
}
</style>