<template>
    <div class="blHome">
        <BlHomeCnt></BlHomeCnt>
        <BlHomeType></BlHomeType>
        <BlHomeTag></BlHomeTag>
        <BlHomeRed></BlHomeRed>
        <BlHomeWeChat></BlHomeWeChat>
    </div>
</template>

<script>
import BlHomeCnt from '../components/BlHomeContent/BlHomeCnt.vue'
import BlHomeType from '../components/BlHomeContent/BlHomeType.vue'
import BlHomeTag from '../components/BlHomeContent/BlHomeTag.vue'
import BlHomeRed from '../components/BlHomeContent/BlHomeRed.vue'
import BlHomeWeChat from '../components/BlHomeContent/BlHomeWeChat.vue'
export default {
    components:{
        BlHomeCnt,
        BlHomeType,
        BlHomeTag,
        BlHomeRed,
        BlHomeWeChat
    }
}
</script>

<style lang="less" scoped>
   
</style>