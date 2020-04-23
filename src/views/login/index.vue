<template>
  <div class="login-container">
    <van-nav-bar title="登录" class="page-nav-bar" />
    <van-form @submit="onSubmit">
      <van-field v-model="user.mobile" name="用户名" placeholder="请输入手机号">
        <i slot="left-icon" class="iconfont- iconshouji"></i>
      </van-field>
      <van-field v-model="user.code" left-icon="smile-o" name="密码" placeholder="请输入验证码">
        <i class="iconfont- iconyanzhengma" slot="left-icon"></i>
        <template #button>
          <van-button size="small" round type="default" class="sendBtn">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button block native-type="submit" type="info" class="login-btn">登录</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { login } from '@/api/user'
export default {
  name: 'loginIndex',
  data() {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      const user = this.user
      try {
        const res = await login(user)
        console.log(res)
      } catch (error) {
        if (error.response.status === 400) {
          console.log('手机号或验证码不正确')
        } else {
          console.log('登录失败，请稍候重试~')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.iconfont- {
  font-size: 37px;
}
.sendBtn {
  background-color: #ededed;
}
.login-btn {
  background-color: #6db4fb;
  border: none;
}
</style>
