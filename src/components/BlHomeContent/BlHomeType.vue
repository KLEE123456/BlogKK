<template>
    <div class="BlType">
        <div class="BlTypeTop">
            <div class="Type">
                 <i class="el-icon-s-opportunity"></i><span>分类</span>
            </div>
            <div class="more">
                <el-link href="https://element.eleme.io" target="_blank" type="success" :underline="false">more
                    <i class="el-icon-d-arrow-right"></i>
                </el-link>
            </div>
        </div>
        <div class="BlTypeCnt">
            <div class="studyLog">
                <span>学习日志</span>
                <el-tag type="success" size="mini">18</el-tag>
            </div>
             <div class="feel">
                <span>思考与感悟</span>
                <el-tag type="success" size="mini">18</el-tag>
            </div>
             <div class="myForm">
                <span>清单</span>
                <el-tag type="success" size="mini">18</el-tag>
            </div>
             <div class="myJS">
                <span>JavaScript</span>
                <el-tag type="success" size="mini">18</el-tag>
            </div>
             <div class="work">
                <span>创业</span>
                <el-tag type="success" size="mini">18</el-tag>
            </div>
             <div class="cog">
                <span>认知升级</span>
                <el-tag type="success" size="mini">18</el-tag>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .BlType{
        width: 23%;
        height: 410px;
        border: 2px solid gainsboro;
        position: absolute;
        left: 1000px;
        top: 110px;
    }
    .BlTypeTop{
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
    .BlTypeCnt{
        width: 90%;
        height: 300px;
        margin: 0 auto;
    }
    .studyLog,.feel,.myForm,.myJS,.work,.cog{
        width: 100%;
        height: 50px;
        border: 2px solid gainsboro;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 15px;
    }
</style>