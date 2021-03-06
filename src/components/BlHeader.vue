<template>
    <div class="header">
        <div class="myMenu">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"  background-color="#39393b"
                text-color="#fff"
                active-text-color="#ffd04b" >
                <el-menu-item index="bLogo">
                    <span class="mLogo">Likai</span>
                </el-menu-item>
                <el-menu-item index="bHome"><i class="el-icon-s-home"></i>首页</el-menu-item> 
                <el-menu-item index="bType"><i class="el-icon-s-opportunity"></i>分类</el-menu-item>    
                <el-menu-item index="bTag"><i class="el-icon-collection-tag"></i>标签</el-menu-item> 
                <el-menu-item index="bTFile"><i class="el-icon-user-solid"></i>关于我</el-menu-item>  
            </el-menu>  
        </div>  
        <div class="mySearch">
            <el-input
                placeholder="Search..."
                prefix-icon="el-icon-search"
                v-model="input2" class="modInput">
            </el-input>
        </div> 
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .header{
        position: relative;
    }
    .mLogo{
        color: #41B883;
        font-size: 20px;
        font-weight: bolder;
    }
    .mySearch{
        width: 300px;
        height: 40px;
        position: absolute;
        right: 20px;
        top: 10px;
    }
    .modInput .el-input__inner {
        background-color: #39393b;
        border: 0px;
        color: white;

    }
</style>