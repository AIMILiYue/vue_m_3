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
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    async onSubmit() {
      const user = this.user
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await login(user)
        this.$toast.success('登录成功')
      } catch (error) {
        if (error.response.status === 400) {
          this.$toast.fail('手机号或验证码不正确')
        } else {
          this.$toast.fail('登录失败，请稍候重试')
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
