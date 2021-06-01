<template>
  <div id="category">
    <better-tab-control :titles="['国内','国际','体育','军事','科技','财经','游戏','汽车','健康']"
                 @tabClick="tabClick"
                 class="tab-control"/>
    <scroll class="content"
            :probe-type="3"
            ref="scroll"
            @scroll="contentScroll"
            :pull-up-load="true"
            :pull-down-refresh="true"
            @pullingUp="loadmore"
            @pullingDown="refresh">
      <news-list :news="news[currentType].list"/>
      <ul>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
      </ul>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowTop" ref="backtop"/>
  </div>
</template>

<script>
// import TabControl from "@/components/content/tabControl/TabControl";
import BetterTabControl from "@/components/content/tabControl/BetterTabControl";
import NewsList from "@/components/content/news/NewsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";

import {getHomenews} from "@/network/home";
import {debounce} from "@/common/utils";
export default {
  name: "Category",
  components: {
    // TabControl,
    BetterTabControl,
    NewsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      news: {    //请求数据模式
        'guonei': {page: 0, list: []},
        'guoji': {page: 0, list: []},
        'tiyu': {page: 0, list: []},
        'junshi': {page: 0, list: []},
        'keji': {page: 0, list: []},
        'caijing': {page: 0, list: []},
        'youxi': {page: 0, list: []},
        'qiche': {page: 0, list: []},
        'jiankang': {page: 0, list: []},
      },
      currentType: 'guonei',
      isShowTop: true,
      backtopPosition: 0,
      load: false,
      saveY: 0,
      isLoading: false
    }
  },
  created() {
    //请求新闻数据
    this.getHomenews('guonei')
    this.getHomenews('guoji')
    this.getHomenews('tiyu')
    this.getHomenews('junshi')
    this.getHomenews('keji')
    this.getHomenews('caijing')
    this.getHomenews('youxi')
    this.getHomenews('qiche')
    this.getHomenews('jiankang')
    //监听item中的图片加载完成

  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on('itemimageLoad', ()=> {
      refresh()
    })
  },
  activated() {  //进入页面
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {   //离开页面
    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods: {
    /*
    * 事件监听
    * */

    tabClick(index) {   //分类点击
      switch (index) {
        case 0 :
          this.currentType = 'guonei'
          break
        case 1 :
          this.currentType = 'guoji'
          break
        case 2 :
          this.currentType = 'tiyu'
          break
        case 3 :
          this.currentType = 'junshi'
          break
        case 4 :
          this.currentType = 'keji'
          break
        case 5 :
          this.currentType = 'caijing'
          break
        case 6 :
          this.currentType = 'youxi'
          break
        case 7 :
          this.currentType = 'qiche'
          break
        case 8 :
          this.currentType = 'jiankang'
          break
      }
    },
    //回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(position) {
      //判断Backtop是否显示
      this.isShowTop = (-position.y) > 1000
    },
    //图片加载  $el用于获取组件的元素
    swiperImageLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    //上拉加载
    loadmore(){
      this.isLoading = false
      this.$refs.scroll.$emit('infinitescroll.reInit');
      this.$refs.scroll.$emit('infinitescroll.loading');
      this.getHomenews(this.currentType)
    },
    //下拉刷新
    refresh(){
      this.isLoading = false
      this.$refs.scroll.$emit('infinitescroll.downloading');
      console.log('shuaxing')
      this.news[this.currentType].page = 0
      this.news[this.currentType].list = []
      this.getHomenews(this.currentType)
    },
    /*
    * 网络请求
    * */
    getHomenews(type) {
      const page = this.news[type].page + 1
      getHomenews(type,page).then(res => {
        // console.log(res.data.result.data);
        this.news[type].list.push(...res.data.result.data)
        // console.log(this.news[type].list);
        this.news[type].page += 1
        this.$refs.scroll.$emit('infinitescroll.reInit');
        this.isLoading =true
        this.finishPullUp()
        this.finishPullDown()
      })
    },
    //完成上拉加载
    finishPullUp() {
      this.$refs.scroll.$emit('infinitescroll.loadedDone');
      this.$refs.scroll.finishPullUp()
    },
    finishPullDown() {
      this.$refs.scroll.$emit('infinitescroll.downover');
      this.$refs.scroll.finishPullDown()
    }
  }
}
</script>

<style scoped>
#category{
  height: 100vh;
  position: relative;
}
.tab-control {
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 10px;
  left: 0;
  right: 0;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
