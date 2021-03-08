<template>
  <div class="MyHContent">
      <div class="MyHTop">
           <div class="leftText">
               <h2>博客</h2>
           </div>
           <div class="rightText">
               共&nbsp;&nbsp;<span>14</span>&nbsp;&nbsp;篇
           </div>
      </div>
      <BlHomeCItem></BlHomeCItem>
      <BlHomeCItem></BlHomeCItem>
      <BlHomeCItem></BlHomeCItem>
      <BlHomeCItem></BlHomeCItem>
      <BlHomeCItem></BlHomeCItem>
      <BlHomeCItem></BlHomeCItem>
      <div class="MyHBottom">
          <div class="beginPageBtn">
               <el-button type="success" plain>首页</el-button>
          </div>
          <div class="prePageBtn">
              <el-button type="success" plain>上一页</el-button>
          </div>
          <div class="nextPageBtn">
              <el-button type="success" plain>下一页</el-button>
          </div>
          <div class="endPageBtn">
              <el-button type="success" plain>尾页</el-button>
          </div>
      </div>
  </div>
</template>

<script>
import BlHomeCItem from './BlHomeCItem.vue'
export default {
    components:{
        BlHomeCItem
    }
}
</script>

<style lang="less" scoped>
     .MyHTop{
         width: 60%;
         height: 60px;
         border: 2px solid gainsboro;
         box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.1);
         position: relative;
         font-weight: bolder;
         margin-left: 50px;
     }
     .leftText{
         width: 10%;
         height: 100%;
         color: #41B883;
         position: absolute;
         left: 20px;
         line-height: 60px;
         text-align: center;
     }
     .rightText{
         width: 20%;
         height: 100%;
         line-height: 60px;
         text-align: center;
         position: absolute;
         right: 20px;
         span{
             color: rgb(196, 91, 91);
             font-size: 30px;
             vertical-align: middle;
         }
     }
     .MyHBottom{
         width: 60%;
         height: 60px;
         border: 2px solid gainsboro;
         box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.1);
         display: flex;
         justify-content: center;
         align-items: center;
         margin-left: 50px;
     }
</style>