<template>
    <div class="bTag">
        <div class="tagContainer">
            <div class="tagHeader">
                <div class="leftTagText">
                <h2>标签</h2>
            </div>
            <div class="rightTagText">
                共&nbsp;&nbsp;<span>14</span>&nbsp;&nbsp;个
            </div>
            </div>
            <div class="tagCnt">
                <div class="tagOne">
                    <div><el-tag type="danger" size="small">方法论&nbsp;14</el-tag></div>
                    <div><el-tag type="primary" size="small">方法论&nbsp;14</el-tag></div>
                    <div><el-tag type="primary" size="small">方法论&nbsp;14</el-tag></div>
                    <div><el-tag type="primary" size="small">方法论&nbsp;14</el-tag></div>
                    <div><el-tag type="primary" size="small">方法论&nbsp;14</el-tag></div>
                </div>
                <div class="tagTwo">
                    <div><el-tag type="primary" size="small">方法论&nbsp;14</el-tag></div>
                    <div><el-tag type="primary" size="small">方法论&nbsp;14</el-tag></div>
                    <div><el-tag type="primary" size="small">方法论&nbsp;14</el-tag></div>
                    <div><el-tag type="primary" size="small">方法论&nbsp;14</el-tag></div>
                    <div><el-tag type="primary" size="small">方法论&nbsp;14</el-tag></div>
                </div>
            </div>
        </div>
        <div class="BC">
            <BlHomeCItem></BlHomeCItem>
            <BlHomeCItem></BlHomeCItem>
            <BlHomeCItem></BlHomeCItem>
            <BlHomeCItem></BlHomeCItem>
            <BlHomeCItem></BlHomeCItem>
            <BlHomeCItem></BlHomeCItem>
        </div>
         <div class="MyHBottom">
          <div class="beginPageBtn">
               <el-button type="primary" plain>首页</el-button>
          </div>
          <div class="prePageBtn">
              <el-button type="primary" plain>上一页</el-button>
          </div>
          <div class="nextPageBtn">
              <el-button type="primary" plain>下一页</el-button>
          </div>
          <div class="endPageBtn">
              <el-button type="primary" plain>尾页</el-button>
          </div>
      </div>
    </div>
    
    
</template>

<script>
import BlHomeCItem from '../BlHomeContent/BlHomeCItem'
export default {
    components:{
        BlHomeCItem
    }
}
</script>

<style lang="less" scoped>
    .tagContainer{
        width: 60%;
        height: 200px;
        border: 2px solid gainsboro;
        border-bottom: 3px solid #41B883;
        margin: 0 auto;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .tagHeader{
        width: 100%;
        height: 60px;
        border-bottom: 2px solid gainsboro;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 10px;
        
        .leftTagText{
            color: #41B883;
        }
        .rightTagText{
            span{
                color: rgb(196, 91, 91);
                font-size: 30px;
                vertical-align: middle;
            }
        }
        
    }
    .tagCnt{
        width: 100%;
        height: 140px;
        padding: 20px 0px;
        .tagOne,.tagTwo{
            width: 96%;
            height: 50px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            div{
                flex: 1;
            }
        }
    }
    .BC{
        width: 100%;
        min-height: 30px;
        margin-left: 253.5px;
    }
    .MyHBottom{
         width: 60%;
         height: 60px;
         border: 2px solid gainsboro;
         box-shadow: 0 0px 12px 0 rgba(0, 0, 0, 0.1);
         display: flex;
         justify-content: center;
         align-items: center;
         margin: 0 auto;
     }
</style>