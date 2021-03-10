<template>
  <div class="HomeTag">
      <div class="HomeTagTop">
            <div class="Tag">
                 <i class="el-icon-collection-tag"></i><span>标签</span>
            </div>
            <div class="more">
                <el-link href="https://element.eleme.io" target="_blank" type="primary" :underline="false">more
                    <i class="el-icon-d-arrow-right"></i>
                </el-link>
            </div>
      </div>
      <div class="HomeTagCnt">
            <div>
                <el-tag type="primary" size="medium"><span>方法论</span>&nbsp;<span>22</span></el-tag>
                <el-tag type="primary" size="medium"><span>刻意练习</span>&nbsp;<span>22</span></el-tag>
            </div>
             <div>
                <el-tag type="primary" size="medium"><span>SpringBoot</span>&nbsp;<span>22</span></el-tag>
                <el-tag type="primary" size="medium"><span>方法论</span>&nbsp;<span>22</span></el-tag>
            </div>
             <div>
                <el-tag type="primary" size="medium"><span>UserStroy</span>&nbsp;<span>22</span></el-tag>
                <el-tag type="primary" size="medium"><span>CSS3</span>&nbsp;<span>22</span></el-tag>
            </div>
             <div>
                <el-tag type="primary" size="medium"><span>方法论</span>&nbsp;<span>22</span></el-tag>
                <el-tag type="primary" size="medium"><span>方法论</span>&nbsp;<span>22</span></el-tag>
            </div>
             <div>
                <el-tag type="primary" size="medium"><span>方法论</span>&nbsp;<span>22</span></el-tag>
                <el-tag type="primary" size="medium"><span>方法论</span>&nbsp;<span>22</span></el-tag>
            </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .HomeTag{
        width: 23%;
        height: 360px;
        border: 2px solid gainsboro;
        position: absolute;
        left: 1000px;
        top: 560px;
    }
    .HomeTagTop{
        width: 100%;
        height: 55px;
        border-bottom: 2px solid #67C23A;
        padding: 0px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(240, 239, 239);
        margin-bottom: 20px;
        span{
            font-weight: bolder;
        }
    }
    .HomeTagCnt{
        width: 90%;
        height: 250px;
        margin: 0 auto;
        div{
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
    }
</style>