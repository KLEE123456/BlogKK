<template>
    <div class="header">
        <div class="myMenu">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"  background-color="#39393b"
                text-color="#fff"
                active-text-color="#ffd04b" >
                <el-menu-item ></el-menu-item>
                <el-menu-item>
                    <span class="mLogo">Likai</span>
                </el-menu-item>
                <el-menu-item index="bHome"><i class="el-icon-s-home"></i><router-link to="/">首页</router-link></el-menu-item> 
                <el-menu-item index="bType"><i class="el-icon-s-opportunity"></i><router-link to="/blType">分类</router-link></el-menu-item>    
                <el-menu-item index="bTag"><i class="el-icon-collection-tag"></i><router-link to="/blTag">标签</router-link></el-menu-item>
                <el-menu-item index="bFile"><i class="el-icon-document-copy"></i><router-link to="/blArc">归档</router-link></el-menu-item> 
                <el-menu-item index="bInfo"><i class="el-icon-user-solid"></i><router-link to="/aboutMe">关于我</router-link></el-menu-item>  
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
        margin-bottom: 50px;
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