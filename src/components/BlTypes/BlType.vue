<template>
    <div class="bType">
        <div class="typeContainer">
            <div class="typeHeader">
                <div class="leftTypeText">
                <h2>分类</h2>
            </div>
            <div class="rightTypeText">
                共&nbsp;&nbsp;<span>14</span>&nbsp;&nbsp;个
            </div>
            </div>
            <div class="typeCnt">
                <div class="typeOne">
                    <div><el-tag type="danger" size="small">思考与感悟&nbsp;14</el-tag></div>
                    <div><el-tag type="success" size="small">思考与感悟&nbsp;14</el-tag></div>
                    <div><el-tag type="success" size="small">思考与感悟&nbsp;14</el-tag></div>
                    <div><el-tag type="success" size="small">思考与感悟&nbsp;14</el-tag></div>
                    <div><el-tag type="success" size="small">思考与感悟&nbsp;14</el-tag></div>
                </div>
                <div class="typeTwo">
                    <div><el-tag type="success" size="small">清单&nbsp;14</el-tag></div>
                    <div><el-tag type="success" size="small">思考与感悟&nbsp;14</el-tag></div>
                    <div><el-tag type="success" size="small">思考与感悟&nbsp;14</el-tag></div>
                    <div><el-tag type="success" size="small">思考与感悟&nbsp;14</el-tag></div>
                    <div><el-tag type="success" size="small">思考与感悟&nbsp;14</el-tag></div>
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
import BlHomeCItem from '../BlHomeContent/BlHomeCItem'
export default {
    components:{
        BlHomeCItem
    }
}
</script>

<style lang="less" scoped>
    .typeContainer{
        width: 60%;
        height: 200px;
        border: 2px solid gainsboro;
        border-bottom: 3px solid #41B883;
        margin: 0 auto;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .typeHeader{
        width: 100%;
        height: 60px;
        border-bottom: 2px solid gainsboro;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 10px;
        
        .leftTypeText{
            color: #41B883;
        }
        .rightTypeText{
            span{
                color: rgb(196, 91, 91);
                font-size: 30px;
                vertical-align: middle;
            }
        }
        
    }
    .typeCnt{
        width: 100%;
        height: 140px;
        padding: 20px 0px;
        .typeOne,.typeTwo{
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