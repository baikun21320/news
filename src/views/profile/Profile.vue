<template>
  <div id="profile">
    <nav-bar class="Profile-nav"><div slot="center">我的</div></nav-bar>
<!--    v-if="!isActive"-->
    <router-link to="/login" @click="itemclick" v-if="!userinfo.data">
      <div class="tab">
         <div class="img0">
<!--           <img v-if="userinfo.data" :src=userinfo.data.data.avatar alt="">-->
           <img src="~assets/img/login/login.png" alt="">
         </div>
<!--        <div class="test" v-if="userinfo.data">{{userinfo.data.data.nickname}}</div>-->
        <div class="test">登录/注册</div>
           <div class="img1"><img src="~assets/img/login/login_img.png" alt=""></div>
        </div>
    </router-link>
    <router-link to="/userinfo" @click="itemclick" v-else>
      <div class="tab">
        <div class="img0">
          <img :src=userinfo.data.data.avatar alt="">
<!--          <img v-else src="~assets/img/login/login.png" alt="">-->
        </div>
        <div class="test">{{userinfo.data.data.nickname}}</div>
<!--        <div class="test" v-else>登录/注册</div>-->
        <div class="img1"><img src="~assets/img/login/login1.png" alt=""></div>
      </div>
    </router-link>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import NavBar from "@/components/common/navbar/NavBar";
// import TabLogin from "@/components/content/tabLogin/TabLogin";
export default {
  name: "Profile",
  created() {
    console.log( window.localStorage.getItem("token"))//获取指定key的数据

  },
  components: {
    NavBar,
    // TabLogin
  },
  computed: {
    ...mapState(['userinfo']),
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
 methods: {
   itemclick() {
     this.$router.replace(this.path)
   }
 },

}
</script>

<style scoped>
#profile{
  height: 100vh;
  position: relative;
}
  .Profile-nav {
    background: #00A1D6;
    color: #fff;
    z-index: 1;
    border-bottom: 1px solid #fff;
  }
.tab {
  height: 80px;
  padding: 3px;
  background-color: #00A1D6;
  position: relative;
}
.test {
  font-size: 20px;
  line-height: 50px;
  position: absolute;
  color: white;
  top: 20px;
  left: 80px;
}
.img0 {
  width: 65px;
  height: 80px;
  position: absolute;
}
.img0 img{
  width: 65px;
  border-radius: 50%;
}
.img1 {
  width: 30px;
  float: right;
  margin-top: 22px;
  margin-right: 5px;
}
.img1 img{
  width: 30px;
}
</style>
