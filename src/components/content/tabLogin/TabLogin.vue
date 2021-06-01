<template>
<div class="tab">
  <div class="img0"><img src="~assets/img/login/login.png" v-show="!isshow" alt="">
                    <img src="~assets/img/login/login.png" v-show="isshow" alt=""></div>
  <div class="test">登录/注册</div>
  <div class="img1"><img src="~assets/img/login/login1.png" alt=""></div>
</div>
</template>

<script>
export default {
  name: "TabLogin",
  data() {
    return {
      isShow: false,
    };
  },
}
</script>

<style scoped>
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
   width: 60px;
   height: 80px;
   position: absolute;
 }
 .img0 img{
   width: 60px;
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
