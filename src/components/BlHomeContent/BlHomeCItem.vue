<template>
  <div class="BlItem">
        <div class="BlItemCnt">
            <div class="BlCntTitle">
                <h2>移动端web应用锚点设计</h2>
            </div>
            <div class="BlCnt">
                <span>
                    近一段时间一直在做移动端web应用相关的开发，随着产品迭代页面越来越多，一个页面模块也随着增加，产品经理就提出了给内容模块较多的页面添加锚点功能的需求......
                </span>
            </div>
            <div class="BlInfo">
                   <div><el-avatar :size="40" :src="circleUrl"></el-avatar></div>
                   <div class="author">KLEE</div>
                   <div class="upDate"><i class="el-icon-date"></i>2021-03-07</div>
                   <div class="el-icon-view">123</div>
                   <div class="textType">
                       <el-tag type="success">认知升级</el-tag>
                   </div>   
            </div>
            <div class="BlPhoto">
                <img src="../../assets/blPhoto.jpg" alt="_blank" width="210px" height="110px">
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .BlItem{
        width: 60%;
        height: 300px;
        border-right: 2px solid gainsboro;
        border-left: 2px solid gainsboro;
        padding: 20px 20px;
        box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.1);
        margin-left: 50px;
    }
    .BlItemCnt{
        width: 100%;
        height: 100%;
        border-bottom: 2px solid gainsboro;
        padding: 20px 20px;
        position: relative;
    }
    .BlCntTitle,.BlInfo{
        width: 60%;
        height: 20%;
        display: flex;
        align-items: center;
        position:relative;
    }
    .BlCnt{
        width: 60%;
        height: 50%;
        display: flex;
        align-items: center;
    }
    .upDate,.el-icon-view{
        padding: 0px 10px;
        font-size: 10px;
        color: grey;
    }
    .textType{
        position: absolute;
        right: 0px;
    }
    .BlPhoto{
        width:210px;
        height: 110px;
        position: absolute;
        left: 580px;
        top: 60px;
        img{
            border-radius: 4px;
        }
    }
    .author{
        padding: 0px 10px;
        font-size: 10px;
        color: #41B883;
    }
</style>