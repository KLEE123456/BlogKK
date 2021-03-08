<template>
  <div class="myWeChat">
      <div class="focusMe">
           <el-divider><i class="el-icon-mobile-phone"></i><span>扫码了解更多</span></el-divider>
      </div>
      <div class="myWX">
          <img src="../../assets/WeChat.png" alt="_blank" width="230px" height="230px" style="border-radius:4px">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .myWeChat{
        width: 23%;
        height: 300px;
        position: absolute;
        left: 1000px;
        top: 1400px;
    }
    .focusMe{
        width: 100%;
        height: 50px;
        span{
            font-weight: bolder;
        }
    }
    .myWX{
        width: 250px;
        height: 250px;
        border: 2px solid gainsboro;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
</style>