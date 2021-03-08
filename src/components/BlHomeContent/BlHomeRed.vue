<template>
  <div class="recommend">
      <div class="redTop">
          <div class="remd">
               <i class="el-icon-star-on"></i><span>最新推荐</span>
          </div>
          <div class="more">
                <el-link href="https://element.eleme.io" target="_blank" type="success" :underline="false">more
                    <i class="el-icon-d-arrow-right"></i>
                </el-link>
          </div>
      </div>
      <div class="red1">
          <span>用户故事（User Story）</span>
      </div>
      <div class="red2">
          <span>用户故事（User Story）</span>
      </div>
      <div class="red3">
          <span>用户故事（User Story）</span>
      </div>
      <div class="red4">
          <span>用户故事（User Story）</span>
      </div>
      <div class="red5">
          <span>用户故事（User Story）</span>
      </div>
      <div class="red6">
          <span>用户故事（User Story）</span>
      </div>
      <div class="red7">
          <span>用户故事（User Story）</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .recommend{
        width: 23%;
        height: 405px;
        border: 2px solid gainsboro;
        position: absolute;
        left: 1000px;
        top: 950px;
    }
    .redTop{
        width: 100%;
        height: 55px;
        border-bottom: 2px solid #67C23A;
        background-color: rgb(240, 239, 239);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px;
        span{
            font-weight: bolder;
        }
    }
    .red1,.red2,.red3,.red4,.red5,.red6,.red7{
      width: 100%;
      height: 50px;
      border-bottom: 2px solid gainsboro;
      line-height: 50px;
      padding: 0px 20px;
      font-size: 15px;
    }
</style>