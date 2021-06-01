<template>
  <div ref="wrapper" class="wrapper">
    <div class="cont" ref="cont">
      <div v-for="(item,index) in titles"
           :key="index" class="tab-control-item"
           :class="{active: index === currentIndex}"
           @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "BetterTabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick', index) //向外传数据
    },
    verScroll () {
      let width = this.titles.length * 110// 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
      this.$refs.cont.style.width = width + 'px'  // 修改滚动区域的宽度
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            // startX: 0,  // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
            // click: true,
            scrollX: true,
            // scrollY: false,
            // eventPassthrough: 'vertical'
          })
        } else {
          this.scroll.refresh() //如果dom结构发生改变调用该方法
        }
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      let timer = setTimeout(() => { // 其实我也不想写这个定时器的，这相当于又嵌套了一层$nextTick，但是不这么写会失败
        if (timer) {
          clearTimeout(timer)
          this.verScroll()
        }
      }, 0)
    })
  }
}
</script>

<style scoped>
.cont{
  position: relative;
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  box-shadow: 10px 0 1px #888888;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 4px;
}
.active {
  color: var(--color-hight-text);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
}

</style>
