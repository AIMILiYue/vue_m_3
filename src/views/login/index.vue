<template>
  <div class="login-container">
    <van-nav-bar title="登录" class="page-nav-bar">
      <van-icon slot="left" name="arrow-left" @click="$router.back()"></van-icon>
    </van-nav-bar>
    <van-form @submit="onSubmit" ref="loginInfo">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="userFormRules.mobile"
        type="digit"
        maxlength="11"
      >
        <i slot="left-icon" class="iconfont- iconshouji"></i>
      </van-field>
      <van-field
        v-model="user.code"
        left-icon="smile-o"
        name="code"
        placeholder="请输入验证码"
        :rules="userFormRules.code"
        type="digit"
        maxlength="6"
      >
        <i class="iconfont- iconyanzhengma" slot="left-icon"></i>
        <template #button>
          <van-count-down
            v-if="showCodeStatus"
            @finish="resetTime"
            :time="time"
            format="ss s后重新发送"
          />
          <van-button
            v-else
            size="small"
            native-type="button"
            round
            type="default"
            class="sendBtn"
            @click="onSend"
          >发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button block native-type="submit" type="info" class="login-btn">登录</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { login, send } from '@/api/user'
export default {
  name: 'loginIndex',
  data() {
    return {
      user: {
        mobile: '15201139181',
        code: ''
      },
      userFormRules: {
        mobile: [
          { required: true, message: '请填写手机号' },
          { pattern: /1[3|5|7|8]\d{9}/, message: '请填写正确的手机号' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'onChange' },
          { pattern: /^\d{6}$/, message: '请填写正确的验证码' }
        ]
      },
      showCodeStatus: false /* 倒计时状态初始值 - false--隐藏   true--显示 */,
      time: 60 * 1000 /* 倒计时时间 */
    }
  },
  methods: {
    // 登录前手机及验证码格式验证
    async onSubmit() {
      const user = this.user
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data } = await login(user)
        this.$store.commit('setUser', data.data)
        this.$toast.success('登录成功')
        this.$router.back('/my')
      } catch (error) {
        if (error.response.status === 400) {
          this.$toast.fail('手机号或验证码不正确')
        } else {
          this.$toast.fail('登录失败，请稍候重试')
        }
      }
    },
    // 发送验证码
    async onSend() {
      try {
        await this.$refs.loginInfo.validate('mobile')
      } catch (error) {
        console.log(error)
        return false
      }
      // 验证码倒计时状态显示
      this.showCodeStatus = true
      try {
        await send(this.user.mobile)
        this.$toast.success('验证码已发送')
      } catch (error) {
        // 发送失败----验证码倒计时状态隐藏
        this.showCodeStatus = false
        if (error.response.status === 429) {
          this.$toast.fail('发送频繁，请稍候重试')
        } else {
          this.$toast.fail('发送验证码失败，请稍候重试')
        }
      }
    },
    // 验证码倒计时状态隐藏
    resetTime() {
      this.showCodeStatus = false
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
