<template>
    <div class="blHome">
        <BlHeader></BlHeader>
        <BlHomeCnt></BlHomeCnt>
        <BlFooter></BlFooter>
        <BlHomeType></BlHomeType>
        <BlHomeTag></BlHomeTag>
        <BlHomeRed></BlHomeRed>
        <BlHomeWeChat></BlHomeWeChat>
    </div>
</template>

<script>
import BlHeader from '../components/BlHeader.vue'
import BlFooter from '../components/BlFooter.vue'
import BlHomeCnt from '../components/BlHomeContent/BlHomeCnt.vue'
import BlHomeType from '../components/BlHomeContent/BlHomeType.vue'
import BlHomeTag from '../components/BlHomeContent/BlHomeTag.vue'
import BlHomeRed from '../components/BlHomeContent/BlHomeRed.vue'
import BlHomeWeChat from '../components/BlHomeContent/BlHomeWeChat.vue'
export default {
    components:{
        BlHeader,
        BlFooter,
        BlHomeCnt,
        BlHomeType,
        BlHomeTag,
        BlHomeRed,
        BlHomeWeChat
    }
}
</script>

<style lang="less" scoped>
    .blHome{
        background: url("../assets/bg1.jpg") no-repeat;
    }
</style>