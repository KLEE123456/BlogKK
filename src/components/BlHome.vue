<template>
    <div class="blHome">
        <BlHeader></BlHeader>
        <BlHomeCnt></BlHomeCnt>
        <BlFooter></BlFooter>
    </div>
</template>

<script>
import BlHeader from '../components/BlHeader.vue'
import BlFooter from '../components/BlFooter.vue'
import BlHomeCnt from '../components/BlHomeContent/BlHomeCnt.vue'
export default {
    components:{
        BlHeader,
        BlFooter,
        BlHomeCnt
    }
}
</script>

<style>

</style>