<template>
    <div class="container">
        <BlHeader></BlHeader>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        <BlFooter></BlFooter>
    </div>
</template>

<script>
import BlHeader from './components/BlHeader'
import BlFooter from './components/BlFooter'
export default {
    components:{
        BlHeader,
        BlFooter
    }
}
</script>

<style lang="less">
    *{
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
    }
    .container{
        background: url("./assets/homeBg1.png");
    }
    a{
        text-decoration: none;
    }
</style>
