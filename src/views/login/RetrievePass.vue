<template>
  <!-- 注册 -->
  <div>
    <div class="zhx_retrieve">
      <van-field v-model="sms" center clearable placeholder="请输入手机号">
        <template #button>
          <a style="color: red"
             v-show="isShow == false"
             size="small"
             type="primary"
             @click="onClickSend">发送验证码</a>
          <a style="color: gray" v-show="isShow == true">获取验证码({{ num }})</a>
        </template>
      </van-field>
      <van-cell-group>
        <van-field v-model="sss" placeholder="请输入验证码" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="password" placeholder="请输入密码" />
      </van-cell-group>
    </div>
    <div class="zhx_login_button">
      <button>注册</button>
    </div>
  </div>
</template>

<script>
import {Toast} from "vant";

export default {
  data() {
    return {
      sms: "",
      sss: "",
      password: "",
      isShow: false,
      num: 60,
    };
  },
  methods: {
    onLogin() {
      this.$router.push("/login");
    },
    onClickSend() {
      this.$APP
        .smsCode({
          mobile: this.sms,
          sms_type: "login",
        })
        .then((res) => {
          console.log(res);
          if (res.data.code === 200) {
            this.countDown();
            Toast(res.data.msg);
          } else if (res.data.code == 201) {
            Toast(res.data.msg);
          }
        });
    },
    //倒计时
    countDown() {
      this.isShow = true;
      setInterval(() => {
        this.num--;
        if (this.num <= 0) {
          this.isShow = false;
          this.num = 60;
        }
      }, 1000);
    },

    redister() {
      this.$APP
        .login({
          mobile: this.sms,
          sms_code: this.sss,
          client: 1,
          type: 2,
        })
        .then((res) => {
          console.log(res);
          let token = res.data.data.remember_token;
          window.localStorage.setItem("token", token);
          this.$router.push("/home");
        });
    },
  }
};
</script>

<style>
.zhx_retrieve {
  width: 100%;
  height: 25vh;
}
.zhx_login_button {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
}
.zhx_login_button button {
  width: 90%;
  height: 7vh;
  background: orange;
  border-radius: 18px;
  border: none;
}
</style>
